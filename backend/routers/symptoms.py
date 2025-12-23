"""
Symptoms endpoints - Symptom tracking
"""
from fastapi import APIRouter, HTTPException
from models import SymptomData, UserHistory, SymptomResponse, HistoryResponse
from services.google_sheets import sheets_service
from utils.logger import setup_logger

logger = setup_logger(__name__)

router = APIRouter(prefix="/api/symptoms", tags=["symptoms"])

@router.post("", response_model=SymptomResponse)
async def save_symptom(data: SymptomData):
    """
    Save a symptom record for a user
    
    - **user_id**: User identifier (must start with 'user_')
    - **symptom_type**: Type of symptom (قند ناشتا, قند بعد از غذا, فشار خون, وزن)
    - **value**: Symptom value
    """
    try:
        result = await sheets_service.save_symptom(
            data.user_id,
            data.symptom_type,
            data.value
        )
        
        return result
        
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error saving symptom: {e}")
        raise HTTPException(
            status_code=500,
            detail="خطا در ذخیره علامت"
        )

@router.post("/history", response_model=HistoryResponse)
async def get_symptoms(data: UserHistory):
    """
    Get symptom history for a user
    
    - **user_id**: User identifier
    - **symptom_filter**: Optional filter for symptom type
    """
    try:
        history = sheets_service.get_user_history(
            data.user_id,
            data.symptom_filter
        )
        
        return {"data": history}
        
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error fetching history: {e}")
        raise HTTPException(
            status_code=500,
            detail="خطا در دریافت تاریخچه"
        )

@router.get("/types")
async def get_symptom_types():
    """
    Get list of available symptom types
    """
    return {
        "types": [
            {
                "id": "fasting_glucose",
                "name": "قند ناشتا",
                "unit": "mg/dL",
                "range": {"min": 20, "max": 600}
            },
            {
                "id": "postprandial_glucose",
                "name": "قند بعد از غذا",
                "unit": "mg/dL",
                "range": {"min": 20, "max": 600}
            },
            {
                "id": "blood_pressure",
                "name": "فشار خون",
                "unit": "mmHg",
                "format": "systolic/diastolic",
                "range": {
                    "systolic": {"min": 70, "max": 250},
                    "diastolic": {"min": 40, "max": 150}
                }
            },
            {
                "id": "weight",
                "name": "وزن",
                "unit": "kg",
                "range": {"min": 20, "max": 300}
            }
        ]
}
