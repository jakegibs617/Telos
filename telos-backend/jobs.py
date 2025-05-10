# telos-backend/jobs.py

from fastapi import APIRouter, HTTPException
import httpx

router = APIRouter()

@router.get("/api/jobs/fetch")
async def fetch_jobs(source: str = "airtable"):
    greenhouse_url = f"https://boards-api.greenhouse.io/v1/boards/{source}/jobs"
    try:
        async with httpx.AsyncClient() as client:
            response = await client.get(greenhouse_url)
            response.raise_for_status()
            data = response.json()
            return {"source": source, "jobs": data.get("jobs", [])}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
