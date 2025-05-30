import os
from fastapi import UploadFile
import uuid

UPLOAD_DIR = "uploads/"
os.makedirs(UPLOAD_DIR, exist_ok=True)

async def save_file(file: UploadFile) -> str:
    file_id = f"{uuid.uuid4().hex}_{file.filename}"
    path = os.path.join(UPLOAD_DIR, file_id)

    with open(path, "wb") as buffer:
        content = await file.read()
        buffer.write(content)

    return path
