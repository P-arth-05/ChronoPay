from sqlalchemy import Column, String, Integer, TIMESTAMP, Boolean, JSON
from sqlalchemy.dialects.postgresql import UUID
import uuid
from app.database import Base


class Task(Base):
    __tablename__ = "tasks"
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    type = Column(String, nullable=False)
    data = Column(JSON, nullable=False)
    reward_minutes = Column(Integer, nullable=False)
    created_at = Column(TIMESTAMP, nullable=False)
    active = Column(Boolean, default=True)
