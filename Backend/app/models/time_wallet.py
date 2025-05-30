from sqlalchemy import Column, Integer, TIMESTAMP, ForeignKey
from sqlalchemy.dialects.postgresql import UUID
import uuid
from app.database import Base


class TimeWallet(Base):
                 __tablename__ = "time_wallets"
                 id = Column(UUID(as_uuid=True),
                             primary_key=True,
                             default=uuid.uuid4)
                 user_id = Column(UUID(as_uuid=True),
                                  ForeignKey("users.id"),
                                  nullable=False)
                 balance = Column(Integer, default=0)
                 updated_at = Column(TIMESTAMP, nullable=False)
