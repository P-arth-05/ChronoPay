from sqlalchemy import Column, String, TIMESTAMP, DateTime
from sqlalchemy.dialects.postgresql import UUID
import uuid
from app.database import Base
from datetime import datetime


class User(Base):
  __tablename__ = "users"
  id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
  clerk_id = Column(String, unique=True, nullable=False)  # Clerk user ID
  email = Column(String, unique=True, nullable=False)
  name = Column(String, nullable=False)
  created_at = Column(DateTime, nullable=False, default=datetime.utcnow)
  provider = Column(String, nullable=False, default="clerk")
