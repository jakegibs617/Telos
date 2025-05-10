from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:8100"],  # default Ionic port
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Weights(BaseModel):
    fortune500: int
    financialBacking: int
    glassdoor: int
    sentiment: int
    pay: int

class JobPreferences(BaseModel):
    role: str
    location: str
    distance: int
    jobType: str
    weights: Weights


@app.post("/api/preferences")
def receive_preferences(prefs: JobPreferences):
    print("Received prefs:", prefs)
    return {"status": "ok", "data": prefs}
