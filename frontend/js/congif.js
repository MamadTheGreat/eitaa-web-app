/**
 * Frontend Configuration
 * Updated for ArvanCloud deployment
 */

const CONFIG = {
    // API Configuration
    // ⚠️ این URL رو با URL واقعی بک‌اندت روی Render جایگزین کن
    API_URL: 'https://eitaa-web-app-final.onrender.com',
    
    // Alternative: استفاده از environment variable
    // API_URL: typeof window !== 'undefined' && window.ENV?.API_URL 
    //     ? window.ENV.API_URL 
    //     : 'https://eitaa-web-app-final.onrender.com',
    
    // Cache Duration (milliseconds)
    CACHE_DURATION: 30 * 60 * 1000, // 30 minutes
    
    // Validation Ranges
    VALIDATION: {
        BLOOD_SUGAR: { min: 20, max: 600 },
        BLOOD_PRESSURE_SYSTOLIC: { min: 70, max: 250 },
        BLOOD_PRESSURE_DIASTOLIC: { min: 40, max: 150 },
        WEIGHT: { min: 20, max: 300 }
    },
    
    // Disease Configuration
    DISEASES: [
        {
            id: 'diabetes',
            name: 'دیابت نوع ۲',
            icon: '🩸',
            color: 'blue'
        },
        {
            id: 'hypertension',
            name: 'فشار خون بالا',
            icon: '💓',
            color: 'red'
        },
        {
            id: 'cardiac',
            name: 'بیماری قلبی عروقی',
            icon: '❤️',
            color: 'pink'
        }
    ],
    
    // Symptom Types
    SYMPTOM_TYPES: [
        {
            id: 'blood_sugar',
            name: 'قند خون',
            icon: '🩸',
            subtypes: [
                { id: 'قند ناشتا', name: 'قند ناشتا (FBS)' },
                { id: 'قند بعد از غذا', name: 'قند بعد از غذا (2HPP)' }
            ]
        },
        {
            id: 'blood_pressure',
            name: 'فشار خون',
            icon: '💓'
        },
        {
            id: 'weight',
            name: 'وزن',
            icon: '⚖️'
        }
    ],
    
    // Contact Information
    CONTACT: {
        eitaa: 'https://eitaa.com/joinchat/6055926614C5ed07fc3f6',
        phone: '021-12345678',
        email: 'info@example.com'
    },
    
    // Toast Configuration
    TOAST_DURATION: 3000, // 3 seconds
    
    // Request timeout
    REQUEST_TIMEOUT: 10000, // 10 seconds
    
    // Retry configuration
    MAX_RETRIES: 3,
    RETRY_DELAY: 1000 // 1 second
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}

// Make available globally
if (typeof window !== 'undefined') {
    window.CONFIG = CONFIG;
}
