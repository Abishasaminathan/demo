# Test Cases Documentation

## 1. Register Page Test Cases

### 1.1 Field Validation Tests
- **TC-R-001**: Empty full name field
  - Input: Leave full_name empty
  - Expected: Error message "Full name required"
  
- **TC-R-002**: Empty username field
  - Input: Leave username empty
  - Expected: Error message "Username required"
  
- **TC-R-003**: Invalid email format
  - Input: email_id = "invalidemail"
  - Expected: Error message "Valid email required"
  
- **TC-R-004**: Empty email field
  - Input: Leave email_id empty
  - Expected: Error message "Valid email required"
  
- **TC-R-005**: Empty country selection
  - Input: Leave country_row_id empty
  - Expected: Error message "Country required"
  
- **TC-R-006**: Invalid mobile number (less than 10 digits)
  - Input: mobile_number = "12345"
  - Expected: Error message "Mobile must be 10 digits"
  
- **TC-R-007**: Invalid mobile number (more than 10 digits)
  - Input: mobile_number = "12345678901"
  - Expected: Error message "Mobile must be 10 digits"
  
- **TC-R-008**: Short password (less than 6 characters)
  - Input: password = "123"
  - Expected: Error message "Password must be 6+ characters"
  
- **TC-R-009**: Empty password field
  - Input: Leave password empty
  - Expected: Error message "Password must be 6+ characters"

### 1.2 Successful Registration Tests
- **TC-R-010**: Valid registration with all required fields
  - Input: All valid data
  - Expected: Success message, redirect to login page
  
- **TC-R-011**: Registration with optional referral_id
  - Input: All valid data + referral_id
  - Expected: Success message, redirect to login page
  
- **TC-R-012**: Registration without referral_id
  - Input: All valid data, empty referral_id
  - Expected: Success message, redirect to login page

### 1.3 API Integration Tests
- **TC-R-013**: Duplicate email registration
  - Input: Email already registered
  - Expected: Error message from API
  
- **TC-R-014**: Duplicate username registration
  - Input: Username already registered
  - Expected: Error message from API

### 1.4 UI/UX Tests
- **TC-R-015**: Country dropdown displays all countries
  - Expected: 10 countries listed with placeholder
  
- **TC-R-016**: Navigate to login page link
  - Action: Click "Sign In" link
  - Expected: Navigate to /login page
  
- **TC-R-017**: Form field focus states
  - Action: Click on input fields
  - Expected: Blue border and shadow on focus
  
- **TC-R-018**: Error state styling
  - Input: Invalid data
  - Expected: Red border on error fields

---

## 2. Login Page Test Cases

### 2.1 Field Validation Tests
- **TC-L-001**: Empty login_id field
  - Input: Leave login_id empty
  - Expected: Error message "Login ID required"
  
- **TC-L-002**: Empty password field
  - Input: Leave password empty
  - Expected: Error message "Password required"
  
- **TC-L-003**: Both fields empty
  - Input: Leave both fields empty
  - Expected: Both error messages displayed

### 2.2 Authentication Tests
- **TC-L-004**: Invalid credentials
  - Input: Wrong email/username or password
  - Expected: Error alert "Invalid Login Credentials"
  
- **TC-L-005**: Valid credentials (email)
  - Input: Registered email + correct password
  - Expected: Success, redirect to dashboard
  
- **TC-L-006**: Valid credentials (username)
  - Input: Registered username + correct password
  - Expected: Success, redirect to dashboard
  
- **TC-L-007**: Unregistered user login attempt
  - Input: Non-existent email/username
  - Expected: Error message from API

### 2.3 UI/UX Tests
- **TC-L-008**: Navigate to register page link
  - Action: Click "Create Account" link
  - Expected: Navigate to /register page
  
- **TC-L-009**: Form field focus states
  - Action: Click on input fields
  - Expected: Blue border and shadow on focus
  
- **TC-L-010**: Password field masking
  - Input: Type password
  - Expected: Characters displayed as dots/asterisks

---

## 3. Dashboard Page Test Cases

### 3.1 Data Display Tests
- **TC-D-001**: Display user full name
  - Expected: Full name from API response displayed correctly
  
- **TC-D-002**: Display username
  - Expected: Username from API response displayed correctly
  
- **TC-D-003**: Display email
  - Expected: Email from API response displayed correctly
  
- **TC-D-004**: Display mobile number
  - Expected: Mobile number from API response displayed correctly
  
- **TC-D-005**: Display country
  - Expected: Country from API response displayed correctly
  
- **TC-D-006**: Display referral ID
  - Expected: Referral ID from API response displayed (or N/A if empty)

### 3.2 Authentication Tests
- **TC-D-007**: Access dashboard without login
  - Action: Navigate to /dashboard without login
  - Expected: Show "No User Data" message with login button
  
- **TC-D-008**: Access dashboard with invalid session
  - Action: Manually set invalid data in localStorage
  - Expected: Redirect to login page

### 3.3 Logout Tests
- **TC-D-009**: Logout functionality
  - Action: Click logout button
  - Expected: Clear localStorage, redirect to login page
  
- **TC-D-010**: Access dashboard after logout
  - Action: Try to access dashboard after logout
  - Expected: Show "No User Data" message

### 3.4 UI/UX Tests
- **TC-D-011**: Responsive grid layout
  - Expected: User details displayed in grid format
  
- **TC-D-012**: Card hover effects
  - Action: Hover over detail cards
  - Expected: Card lifts with shadow effect
  
- **TC-D-013**: Welcome message personalization
  - Expected: "Welcome back, [user's name]!" displayed
  
- **TC-D-014**: Icons display correctly
  - Expected: Each field has appropriate emoji icon

---

## 4. Integration Test Cases

### 4.1 Complete User Flow
- **TC-I-001**: New user registration to dashboard
  - Steps: Register → Login → View Dashboard
  - Expected: Complete flow works seamlessly
  
- **TC-I-002**: Register, logout, login again
  - Steps: Register → Login → Logout → Login
  - Expected: All steps work correctly

### 4.2 API Integration
- **TC-I-003**: API key header sent correctly
  - Expected: All API calls include api_key header
  
- **TC-I-004**: Handle API timeout
  - Expected: Show appropriate error message
  
- **TC-I-005**: Handle network errors
  - Expected: Show appropriate error message

---

## 5. Performance Test Cases

### 5.1 Load Time Tests
- **TC-P-001**: Page load time
  - Expected: Pages load within 2 seconds
  
- **TC-P-002**: API response time
  - Expected: API calls complete within 3 seconds

### 5.2 Optimization Tests
- **TC-P-003**: Form validation performance
  - Expected: Instant validation feedback
  
- **TC-P-004**: Smooth animations
  - Expected: No lag in transitions and hover effects

---

## 6. Browser Compatibility Test Cases

- **TC-B-001**: Chrome browser compatibility
- **TC-B-002**: Firefox browser compatibility
- **TC-B-003**: Safari browser compatibility
- **TC-B-004**: Edge browser compatibility
- **TC-B-005**: Mobile responsive design (iOS)
- **TC-B-006**: Mobile responsive design (Android)

---

## 7. Security Test Cases

- **TC-S-001**: Password not visible in plain text
- **TC-S-002**: User data stored securely in localStorage
- **TC-S-003**: API key not exposed in client code
- **TC-S-004**: XSS prevention in form inputs
- **TC-S-005**: CSRF protection via API headers
