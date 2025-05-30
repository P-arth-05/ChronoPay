from sqlalchemy.orm import Session
from app.models import user as user_model
from app.database import SessionLocal


def get_user_by_clerk_id(clerk_id: str, db: Session = None):
    db = db or SessionLocal()
    try:
        user = db.query(user_model.User).filter(
            user_model.User.clerk_id == clerk_id).first()
        return user
    finally:
        if not db:
            db.close()


def create_user(user_data: dict, db: Session = None):
    db = db or SessionLocal()
    try:
        new_user = user_model.User(clerk_id=user_data["clerk_id"],
                                   email=user_data.get("email"),
                                   name=user_data.get("name", ""))
        db.add(new_user)
        db.commit()
        db.refresh(new_user)
        return new_user
    finally:
        if not db:  # Only close if we created the session
            db.close()
