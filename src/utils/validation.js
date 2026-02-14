/**
 * Validation utility functions for form inputs
 * Time Complexity: O(1) for all validations
 * Space Complexity: O(1)
 */

/**
 * Validates registration form data
 * @param {Object} data - Registration form data
 * @returns {Object} errors - Object containing validation errors
 */
export const registerValidation = (data) => {
  const errors = {};
  
  // Full name validation
  if (!data.full_name) errors.full_name = "Full name required";
  
  // Username validation
  if (!data.username) errors.username = "Username required";
  
  // Email validation with regex pattern
  if (!data.email_id || !/\S+@\S+\.\S+/.test(data.email_id))
    errors.email_id = "Valid email required";
  
  // Country selection validation
  if (!data.country_row_id) errors.country_row_id = "Country required";
  
  // Mobile number validation (must be exactly 10 digits)
  if (!data.mobile_number || data.mobile_number.length !== 10)
    errors.mobile_number = "Mobile must be 10 digits";
  
  // Password validation (minimum 6 characters)
  if (!data.password || data.password.length < 6)
    errors.password = "Password must be 6+ characters";
  
  return errors;
};

/**
 * Validates login form data
 * @param {Object} data - Login form data
 * @returns {Object} errors - Object containing validation errors
 */
export const loginValidation = (data) => {
  const errors = {};
  
  // Login ID validation (can be email or username)
  if (!data.login_id) errors.login_id = "Login ID required";
  
  // Password validation
  if (!data.password) errors.password = "Password required";
  
  return errors;
};
