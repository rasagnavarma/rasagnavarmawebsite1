from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from typing import List
from models import (
    ProfileData, Experience, Mission, Speaking, Certification, 
    Skills, BioData, CommunityWork, ContactSubmission, ContactSubmissionCreate
)
from seed_data import (
    hero_data, bio_data, experiences, missions, speaking_engagements,
    certifications, skills_data, community_work
)


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Seed database on startup
@app.on_event("startup")
async def seed_database():
    try:
        # Check if data already exists
        profile_count = await db.profile.count_documents({})
        
        if profile_count == 0:
            logger.info("Seeding database with initial data...")
            
            # Insert profile data
            await db.profile.insert_one(hero_data)
            logger.info("✓ Profile data seeded")
            
            # Insert bio data
            await db.bio.insert_one(bio_data)
            logger.info("✓ Bio data seeded")
            
            # Insert experiences
            await db.experiences.insert_many(experiences)
            logger.info("✓ Experiences seeded")
            
            # Insert missions
            await db.missions.insert_many(missions)
            logger.info("✓ Missions seeded")
            
            # Insert speaking engagements
            await db.speaking.insert_many(speaking_engagements)
            logger.info("✓ Speaking engagements seeded")
            
            # Insert certifications
            await db.certifications.insert_many(certifications)
            logger.info("✓ Certifications seeded")
            
            # Insert skills
            await db.skills.insert_one(skills_data)
            logger.info("✓ Skills seeded")
            
            # Insert community work
            await db.community.insert_many(community_work)
            logger.info("✓ Community work seeded")
            
            logger.info("Database seeding completed successfully!")
        else:
            logger.info("Database already seeded, skipping...")
    except Exception as e:
        logger.error(f"Error seeding database: {str(e)}")

# API Routes

@api_router.get("/")
async def root():
    return {"message": "Rasagna Varma Portfolio API", "status": "active"}

@api_router.get("/profile")
async def get_profile():
    """Get hero section profile data"""
    try:
        profile = await db.profile.find_one({}, {"_id": 0})
        if not profile:
            raise HTTPException(status_code=404, detail="Profile not found")
        return profile
    except Exception as e:
        logger.error(f"Error fetching profile: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")

@api_router.get("/bio")
async def get_bio():
    """Get biography data"""
    try:
        bio = await db.bio.find_one({}, {"_id": 0})
        if not bio:
            raise HTTPException(status_code=404, detail="Bio not found")
        return bio
    except Exception as e:
        logger.error(f"Error fetching bio: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")

@api_router.get("/experiences")
async def get_experiences():
    """Get all work experiences"""
    try:
        experiences_list = await db.experiences.find({}, {"_id": 0}).sort("order", 1).to_list(100)
        return experiences_list
    except Exception as e:
        logger.error(f"Error fetching experiences: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")

@api_router.get("/missions")
async def get_missions():
    """Get all escalation missions"""
    try:
        missions_list = await db.missions.find({}, {"_id": 0}).to_list(100)
        return missions_list
    except Exception as e:
        logger.error(f"Error fetching missions: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")

@api_router.get("/speaking")
async def get_speaking():
    """Get all speaking engagements"""
    try:
        speaking_list = await db.speaking.find({}, {"_id": 0}).to_list(100)
        return speaking_list
    except Exception as e:
        logger.error(f"Error fetching speaking engagements: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")

@api_router.get("/certifications")
async def get_certifications():
    """Get all certifications"""
    try:
        certs_list = await db.certifications.find({}, {"_id": 0}).to_list(100)
        return certs_list
    except Exception as e:
        logger.error(f"Error fetching certifications: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")

@api_router.get("/skills")
async def get_skills():
    """Get skills data"""
    try:
        skills = await db.skills.find_one({}, {"_id": 0})
        if not skills:
            raise HTTPException(status_code=404, detail="Skills not found")
        return skills
    except Exception as e:
        logger.error(f"Error fetching skills: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")

@api_router.get("/community")
async def get_community():
    """Get community work"""
    try:
        community_list = await db.community.find({}, {"_id": 0}).to_list(100)
        return community_list
    except Exception as e:
        logger.error(f"Error fetching community work: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")

@api_router.post("/contact")
async def submit_contact(contact: ContactSubmissionCreate):
    """Submit contact form"""
    try:
        contact_obj = ContactSubmission(**contact.dict())
        await db.contact_submissions.insert_one(contact_obj.dict())
        logger.info(f"Contact submission received from {contact.email}")
        return {"success": True, "message": "Contact submission received successfully"}
    except Exception as e:
        logger.error(f"Error submitting contact: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to submit contact form")

# Include the router in the main app
app.include_router(api_router)

# Configure CORS origins from environment variable
origins_env = os.getenv("CORS_ORIGINS", "*")
if origins_env.strip() == "*":
    allow_origins = ["*"]
else:
    allow_origins = [o.strip() for o in origins_env.split(",") if o.strip()]

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=allow_origins,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()