# ChronoPay: Pay With Your Time

**ChronoPay** is a decentralized productivity and microtasking platform where users contribute time and complete AI-evaluated tasks in exchange for valuable services — instead of paying with money.

---
##  Live Website
 [Visit the Website](https://chronopay-99.vercel.app/)

---

##  Project Highlights

-  **AI-Powered Evaluation**: Auto-evaluates user submissions like audio, image, and text using Whisper, ResNet, and NLP metrics (BLEU, WER, CER).
-  **Secure Auth**: Integrates with Clerk JWT for authentication.
-  **Modular Backend**: FastAPI microservices with clean separation of concerns.
-  **Interactive Frontend**: Built with Next.js/React for an engaging UX.
-  **Time as Currency**: Tasks convert into credits redeemable for SaaS and digital goods.

---

##  How It Works

1. User signs in with Clerk.
2. User completes tasks (transcription, image tagging, translation).
3. AI evaluates and scores the submission.
4. Credits/time are recorded in the ledger.
5. Credits can be redeemed for services or products.

---

##  Tech Stack

| Layer         | Stack/Tools Used                                |
|---------------|--------------------------------------------------|
| Frontend      | React / Next.js, Tailwind CSS                   |
| Backend       | FastAPI, SQLAlchemy, Pydantic                   |
| Auth          | Clerk JWT, JOSE                                 |
| AI Evaluation | OpenAI Whisper, torchvision (ResNet), jiwer, nltk |
| Audio         | SpeechRecognition, wave                         |
| Image         | PyTorch, torchvision                            |
| NLP           | NLTK, jiwer                                     |
| DB            | PostgreSQL / SQLite                             |
| DevOps        | Docker, Docker Compose, NGINX                   |
| Smart Contract| Solidity (ERC-20-like TimeCoin)                 |

---

##  GitHub Structure

```
chronopay/
│
├── backend/
│   ├── app/
│   │   ├── main.py                # FastAPI entrypoint
│   │   ├── routes/                # API routes (users, tasks, rewards)
│   │   ├── models/                # SQLAlchemy models
│   │   ├── schemas/               # Pydantic request/response models
│   │   ├── services/              # Business logic (task assignment, reward logic)
│   │   └── database.py            # DB setup and session
│   ├── ai_validation/
│   │   ├── nlp_quality.py         # Translation scoring
│   │   ├── image_quality.py       # Vision model task validation
│   │   ├── audio_quality.py       # WER/CER check
│   │   └── utils.py               # Preprocessing and metrics
│   ├── utils/
│   │   ├── auth.py                # JWT verification
│   │   ├── db_ops.py              # DB ops
│   │   ├── storage.py             # File handling
│   │   ├── time_ledger.py         # Tracks time-based credits
│   │   └── ai_eval.py             # Entry point for AI evaluation
│   ├── tests/
│   │   ├── test_users.py
│   │   └── test_tasks.py
│   ├── requirements.txt
│   └── Dockerfile
│
├── frontend/
│   └── ...                        # Next.js / React app
│
├── smart_contracts/
│   └── TimeCoin.sol               # ERC-20 token logic
│
├── infra/
│   ├── docker-compose.yml
│   └── nginx.conf
│
├── .env.example
├── README.md
└── LICENSE
```

---

##  Getting Started

### Backend Setup

```bash
cd backend
python -m venv env
source env/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### Dockerized

```bash
docker-compose up --build
```

---

##  Auth Overview

- Uses Clerk for authentication
- JWTs verified with `jose` and checked against JWKS
- New users auto-created in DB

---

##  AI Task Evaluation

| Type   | Tool/Model              | Metric         |
|--------|-------------------------|----------------|
| Audio  | Whisper, Google API     | WER, CER       |
| Image  | ResNet18 (torchvision)  | Tag overlap    |
| Text   | nltk, BLEU              | BLEU score     |



##  Future Features

- Token staking for reward boosts
- Marketplace for service redemptions
- Federated/Edge AI eval for privacy

