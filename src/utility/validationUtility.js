// Common validation class for common function
class ValidationClass {
    // check key exist in input if not then set key with error message of required 
    // in outputobject
    required (inputObj, outputObj , key) {
        if(!inputObj || !inputObj[key]) {
            outputObj[key] = key + ' required !';
        }
    }
};
// singleton instance for Validation class
export const Validation = new ValidationClass();