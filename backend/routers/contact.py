"""
Contact endpoints - Contact information and support
"""
from fastapi import APIRouter
from models import ContactInfo
from utils.logger import setup_logger

logger = setup_logger(__name__)

router = APIRouter(prefix="/api", tags=["contact"])

@router.get("/contact", response_model=ContactInfo)
async def get_contact_info():
    """
    Get contact information for support and consultation
    """
    logger.info("Contact information requested")
    
    return {
        "eitaa": "https://eitaa.com/joinchat/6055926614C5ed07fc3f6",
        "phone": "021-12345678",
        "email": "info@example.com",
        "address": "تهران، خیابان ولیعصر، پلاک ۱۲۳"
    }

@router.get("/support")
async def get_support_info():
    """
    Get support channel information
    """
    return {
        "telegram": "@your_support_bot",
        "eitaa": "https://eitaa.com/joinchat/6055926614C5ed07fc3f6",
        "email": "support@example.com",
        "working_hours": "شنبه تا پنجشنبه، ساعت 8 صبح تا 8 شب"
    }
