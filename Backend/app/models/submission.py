from sqlalchemy import Column, String, Float, Integer, TIMESTAMP, ForeignKey, JSON
from sqlalchemy.dialects.postgresql import UUID
import uuid
from app.database import Base


class Submission(Base):
                 __tablename__ = "submissions"
                 id = Column(UUID(as_uuid=True),
                             primary_key=True,
                             default=uuid.uuid4)
                 user_id = Column(UUID(as_uuid=True),
                                  ForeignKey("users.id"),
                                  nullable=False)
                 task_id = Column(UUID(as_uuid=True),
                                  ForeignKey("tasks.id"),
                                  nullable=False)
                 response = Column(JSON, nullable=False)
                 status = Column(String, nullable=False)
                 ai_score = Column(Float)
                 time_rewarded = Column(Integer)
                 submitted_at = Column(TIMESTAMP, nullable=False)
