from fastapi import APIRouter, UploadFile, File, Form, HTTPException, Depends
import uuid
import os
from app.utils.ai_eval import evaluate_audio, evaluate_image
from app.utils.auth import verify_token 

router = APIRouter()

UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)

@router.post("/task/submit")
async def submit_task(
    task_id: str = Form(...),
    task_type: str = Form(...),
    file: UploadFile = File(...),
    token_data: dict = Depends(verify_token)  
):
    try:
        file_location = os.path.join(UPLOAD_DIR, file.filename)
        with open(file_location, "wb") as f:
            f.write(await file.read())
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"File saving failed: {str(e)}")

    try:
        if task_type == "audio":
            score = evaluate_audio(file_location)
        elif task_type == "image":
            score = evaluate_image(file_location)
        else:
            raise HTTPException(status_code=400, detail="Unsupported task type.")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Evaluation failed: {str(e)}")

    return {
        "message": "Task submitted and evaluated successfully",
        "submission_id": str(uuid.uuid4()),
        "task_id": task_id,
        "task_type": task_type,
        "score": score
    }
