from database import engine, Base
from models import user, task, redemption, reward, time_wallet, submission

Base.metadata.create_all(bind=engine)
print("Tables created successfully.")
