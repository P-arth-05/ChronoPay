import json
import os

LEDGER_FILE = "ledger.json"

def load_ledger():
    if not os.path.exists(LEDGER_FILE):
        return {}
    with open(LEDGER_FILE, "r") as f:
        return json.load(f)

def save_ledger(ledger):
    with open(LEDGER_FILE, "w") as f:
        json.dump(ledger, f, indent=2)

def update_ledger(user_id: str, duration_minutes: float, score: float):
    ledger = load_ledger()
    user_data = ledger.get(user_id, {"time_minutes": 0, "score_total": 0, "timecoins": 0})

    user_data["time_minutes"] += duration_minutes
    user_data["score_total"] += score
    user_data["timecoins"] += duration_minutes * score  

    ledger[user_id] = user_data
    save_ledger(ledger)

def get_user_ledger(user_id: str):
    ledger = load_ledger()
    return ledger.get(user_id, {})
