from fastapi import APIRouter, Depends
import uuid
from app.utils.auth import verify_token

router = APIRouter()


@router.post("/redeem")
def redeem_reward(reward_id: str, token_data: dict = Depends(verify_token)):

    clerk_id = token_data["clerk_id"]

    return {
        "message": "Reward redeemed successfully",
        "redemption_id": str(uuid.uuid4()),
        "clerk_id": clerk_id
    }
