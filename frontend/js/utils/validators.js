/**
 * Validation utility functions
 */

const Validators = {
    /**
     * Validate blood sugar value
     */
    validateBloodSugar: (value) => {
        const num = parseFloat(value);
        if (isNaN(num)) return 'مقدار قند باید عددی باشد';
        if (num < CONFIG.VALIDATION.BLOOD_SUGAR.min || num > CONFIG.VALIDATION.BLOOD_SUGAR.max) {
            return `مقدار قند باید بین ${CONFIG.VALIDATION.BLOOD_SUGAR.min} تا ${CONFIG.VALIDATION.BLOOD_SUGAR.max} باشد`;
        }
        return null;
    },

    /**
     * Validate blood pressure values
     */
    validateBloodPressure: (systolic, diastolic) => {
        const sys = parseFloat(systolic);
        const dia = parseFloat(diastolic);

        if (isNaN(sys)) return 'فشار سیستولیک باید عددی باشد';
        if (isNaN(dia)) return 'فشار دیاستولیک باید عددی باشد';

        if (sys < CONFIG.VALIDATION.BLOOD_PRESSURE_SYSTOLIC.min || 
            sys > CONFIG.VALIDATION.BLOOD_PRESSURE_SYSTOLIC.max) {
            return `فشار سیستولیک باید بین ${CONFIG.VALIDATION.BLOOD_PRESSURE_SYSTOLIC.min} تا ${CONFIG.VALIDATION.BLOOD_PRESSURE_SYSTOLIC.max} باشد`;
        }

        if (dia < CONFIG.VALIDATION.BLOOD_PRESSURE_DIASTOLIC.min || 
            dia > CONFIG.VALIDATION.BLOOD_PRESSURE_DIASTOLIC.max) {
            return `فشار دیاستولیک باید بین ${CONFIG.VALIDATION.BLOOD_PRESSURE_DIASTOLIC.min} تا ${CONFIG.VALIDATION.BLOOD_PRESSURE_DIASTOLIC.max} باشد`;
        }

        if (sys <= dia) {
            return 'فشار سیستولیک باید بزرگتر از دیاستولیک باشد';
        }

        return null;
    },

    /**
     * Validate weight value
     */
    validateWeight: (value) => {
        const num = parseFloat(value);
        if (isNaN(num)) return 'وزن باید عددی باشد';
        if (num < CONFIG.VALIDATION.WEIGHT.min || num > CONFIG.VALIDATION.WEIGHT.max) {
            return `وزن باید بین ${CONFIG.VALIDATION.WEIGHT.min} تا ${CONFIG.VALIDATION.WEIGHT.max} کیلوگرم باشد`;
        }
        return null;
    },

    /**
     * Validate user ID format
     */
    validateUserId: (userId) => {
        return userId && userId.startsWith('user_') && userId.length >= 5;
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Validators;
}
