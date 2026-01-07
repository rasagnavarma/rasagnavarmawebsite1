from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import datetime
import uuid

# Profile/Hero Section Model
class Metric(BaseModel):
    label: str
    value: int
    suffix: str

class ProfileData(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    role: str
    tagline: str
    metrics: List[Metric]

# Experience/Timeline Model
class Experience(BaseModel):
    id: int
    company: str
    role: str
    team: str
    dates: str
    color: str
    achievements: List[str]
    impact: str
    order: int = 0

# Mission/War Room Model
class Mission(BaseModel):
    id: int
    title: str
    status: str
    priority: str
    problem: str
    actions: List[str]
    stakeholders: List[str]
    outcome: str
    resolutionTime: str
    impact: str

# Speaking Engagement Model
class Speaking(BaseModel):
    id: int
    event: str
    topic: str
    year: str
    audience: str
    type: str
    description: str

# Certification Model
class Certification(BaseModel):
    name: str
    issuer: str
    year: str
    category: str

# Skills Model
class Skills(BaseModel):
    platforms: List[str]
    programming: List[str]
    tools: List[str]
    methodologies: List[str]
    leadership: List[str]

# Bio/Values Model
class Value(BaseModel):
    icon: str
    label: str
    description: str

class BioData(BaseModel):
    title: str
    narrative: List[str]
    values: List[Value]

# Community Work Model
class CommunityWork(BaseModel):
    title: str
    organization: str
    description: str
    team: str

# Contact Submission Model
class ContactSubmission(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    message: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class ContactSubmissionCreate(BaseModel):
    name: str
    email: str
    message: str
