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
            raw_jobs = data.get("jobs", [])
            # Normalize each job
            normalized_jobs = [normalize_job(job) for job in raw_jobs]
            return {"source": source, "jobs": normalized_jobs}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

def normalize_job(raw_job: dict) -> dict:
    return {
        "title": raw_job.get("title"),
        "company": raw_job.get("company_name"),
        "location": raw_job.get("location", {}).get("name"),
        "url": raw_job.get("absolute_url"),
        "published": raw_job.get("first_published"),
    }
