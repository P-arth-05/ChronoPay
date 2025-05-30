from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import SessionLocal
from app.models.reward import Reward
from app.utils.auth import verify_token

router = APIRouter()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.get("/rewards")
def list_rewards(db: Session = Depends(get_db),
                 token_data: dict = Depends(verify_token)):
    # Optionally use token_data["clerk_id"] for user-specific filtering
    rewards = db.query(Reward).filter(Reward.available == True).all()
    return rewards
