from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import redeem_route, rewards_route, submit_task_route, verify_task_route

app = FastAPI()

origins = ["https://your-frontend-domain.com"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(rewards_route.router)
app.include_router(submit_task_route.router)
app.include_router(verify_task_route.router)
app.include_router(redeem_route.router)
