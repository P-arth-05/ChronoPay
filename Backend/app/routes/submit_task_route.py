from fastapi import APIRouter, Depends
import uuid
from app.utils.auth import verify_token

router = APIRouter()

@router.post("/task/submit")
def submit_task(
    task_id: str,
    response: dict,
    token_data: dict = Depends(verify_token)
):
    # Use clerk_id from token_data instead of user_id parameter
    clerk_id = token_data["clerk_id"]
    # Add logic to validate task_id and store submission
    return {
        "message": "Task submission received",
        "submission_id": str(uuid.uuid4()),
        "clerk_id": clerk_id
    }