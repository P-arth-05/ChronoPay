from fastapi import APIRouter, Depends
import random
from app.utils.auth import verify_token

router = APIRouter()

@router.post("/task/verify")
def verify_task(
    submission_id: str,
    token_data: dict = Depends(verify_token)
):
    # Optionally verify that the submission belongs to the authenticated user
    clerk_id = token_data["clerk_id"]
    # Replace random.choice with actual verification logic
    result = random.choice(["approved", "rejected"])
    return {
        "submission_id": submission_id,
        "status": result,
        "ai_score": round(random.uniform(0.5, 1.0), 2),
        "clerk_id": clerk_id
    }