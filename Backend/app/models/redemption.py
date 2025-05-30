from sqlalchemy import Column, String, TIMESTAMP, ForeignKey
from sqlalchemy.dialects.postgresql import UUID
import uuid
from app.database import Base


class Redemption(Base):
                 __tablename__ = "redemptions"
                 id = Column(UUID(as_uuid=True),
                             primary_key=True,
                             default=uuid.uuid4)
                 user_id = Column(UUID(as_uuid=True),
                                  ForeignKey("users.id"),
                                  nullable=False)
                 reward_id = Column(UUID(as_uuid=True),
                                    ForeignKey("rewards.id"),
                                    nullable=False)
                 redeemed_at = Column(TIMESTAMP, nullable=False)
                 status = Column(String, nullable=False)
