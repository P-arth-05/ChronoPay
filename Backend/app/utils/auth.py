from fastapi import HTTPException, Security
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from jose import jwt, JWTError
from app.utils.db_ops import get_user_by_clerk_id, create_user
import requests
import base64
from cryptography.hazmat.primitives.asymmetric import rsa
from cryptography.hazmat.primitives import serialization
from cryptography.hazmat.backends import default_backend

JWKS_URL = "https://usable-mako-79.clerk.accounts.dev/.well-known/jwks.json"
ALGORITHMS = ["RS256"]
CLERK_FRONTEND_API = "https://usable-mako-79.clerk.accounts.dev/"
security = HTTPBearer()


def get_jwks():
    response = requests.get(JWKS_URL)
    response.raise_for_status()
    return response.json()


def jwk_to_pem(jwk_data):
    # base64url decode 'n' and 'e'
    n_bytes = base64.urlsafe_b64decode(jwk_data["n"] + '==')
    e_bytes = base64.urlsafe_b64decode(jwk_data["e"] + '==')

    n_int = int.from_bytes(n_bytes, "big")
    e_int = int.from_bytes(e_bytes, "big")

    public_numbers = rsa.RSAPublicNumbers(e_int, n_int)
    public_key = public_numbers.public_key(default_backend())
    pem = public_key.public_bytes(
        encoding=serialization.Encoding.PEM,
        format=serialization.PublicFormat.SubjectPublicKeyInfo
    )
    return pem


async def verify_token(credentials: HTTPAuthorizationCredentials = Security(security)):
    token = credentials.credentials
    try:
        unverified_header = jwt.get_unverified_header(token)
        kid = unverified_header.get("kid")
        if not kid:
            raise HTTPException(status_code=401, detail="Invalid token: Missing key ID")

        jwks = get_jwks()
        key = next((k for k in jwks["keys"] if k["kid"] == kid), None)
        if not key:
            raise HTTPException(status_code=401, detail="Public key not found")

        # Convert to PEM key
        public_key_pem = jwk_to_pem(key)

        # Decode & verify token
        payload = jwt.decode(
            token,
            public_key_pem,
            algorithms=ALGORITHMS,
            audience=CLERK_FRONTEND_API,
            options={"verify_exp": True, "verify_nbf": True}
        )

        clerk_id = payload.get("sub")
        if not clerk_id:
            raise HTTPException(status_code=401, detail="Invalid token: Missing clerk_id (sub)")

        email = payload.get("email")
        name = payload.get("name", "")

        user = get_user_by_clerk_id(clerk_id)
        if not user:
            user_data = {"clerk_id": clerk_id, "email": email, "name": name}
            user = create_user(user_data)

        return {
            "clerk_id": user.clerk_id,
            "email": user.email,
            "name": user.name
        }

    except JWTError as e:
        print(f"JWT Error: {e}")
        raise HTTPException(status_code=401, detail="Invalid token")
    except Exception as e:
        print(f"Unexpected Error: {e}")
        raise HTTPException(status_code=500, detail="Token verification failed")
