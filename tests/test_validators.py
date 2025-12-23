
"""
Validators tests
"""
from backend.utils.validators import (
    validate_blood_sugar,
    validate_blood_pressure,
    validate_weight,
    validate_user_id,
    validate_disease_type
)

def test_validate_blood_sugar():
    """Test blood sugar validation"""
    assert validate_blood_sugar("100") is None
    assert validate_blood_sugar("200") is None
    assert validate_blood_sugar("10") is not None  # Too low
    assert validate_blood_sugar("700") is not None  # Too high
    assert validate_blood_sugar("abc") is not None  # Invalid

def test_validate_blood_pressure():
    """Test blood pressure validation"""
    assert validate_blood_pressure("120", "80") is None
    assert validate_blood_pressure("140", "90") is None
    assert validate_blood_pressure("60", "40") is not None  # Systolic too low
    assert validate_blood_pressure("300", "80") is not None  # Systolic too high
    assert validate_blood_pressure("120", "30") is not None  # Diastolic too low
    assert validate_blood_pressure("120", "160") is not None  # Diastolic too high
    assert validate_blood_pressure("80", "120") is not None  # Systolic < Diastolic

def test_validate_weight():
    """Test weight validation"""
    assert validate_weight("70") is None
    assert validate_weight("50") is None
    assert validate_weight("10") is not None  # Too low
    assert validate_weight("350") is not None  # Too high
    assert validate_weight("abc") is not None  # Invalid

def test_validate_user_id():
    """Test user ID validation"""
    assert validate_user_id("user_123456") is True
    assert validate_user_id("user_abc") is True
    assert validate_user_id("abc") is False  # Missing prefix
    assert validate_user_id("user_") is False  # Too short

def test_validate_disease_type():
    """Test disease type validation"""
    assert validate_disease_type("diabetes") is True
    assert validate_disease_type("hypertension") is True
    assert validate_disease_type("cardiac") is True
    assert validate_disease_type("invalid") is False
