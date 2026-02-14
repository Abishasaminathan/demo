# User Registration & Login System

A modern, responsive React application for user registration, authentication, and dashboard management with beautiful UI/UX design.

## 🚀 Features

- **User Registration**: Complete registration form with validation
- **User Authentication**: Secure login system
- **User Dashboard**: Display user information in an elegant card-based layout
- **Form Validation**: Client-side validation for all input fields
- **Responsive Design**: Mobile-friendly interface
- **Modern UI**: Gradient backgrounds, smooth animations, and hover effects
- **Error Handling**: Comprehensive error messages from API

## 🛠️ Technologies Used

- **React 18**: Frontend framework
- **React Router DOM**: Navigation and routing
- **Axios**: HTTP client for API calls
- **CSS3**: Modern styling with animations
- **Create React App**: Project setup and build tool

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

## 🔧 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd <project-folder>
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🌐 API Integration

### Base URL
```
https://lobster-app-ddwng.ondigitalocean.app
```

### API Key (Header)
```
api_key: Z9Q7WKEY7ORGBUFGN3EG1QS5Y7FG8DU29GHKKSZH
```

### Endpoints

#### Register
- **URL**: `/user/register`
- **Method**: POST
- **Payload**:
```json
{
  "full_name": "John Doe",
  "username": "johndoe",
  "referral_id": "developer",
  "email_id": "john@example.com",
  "country_row_id": "101",
  "mobile_number": "1234567890",
  "password": "123123"
}
```

#### Login
- **URL**: `/user/login`
- **Method**: POST
- **Payload**:
```json
{
  "login_id": "developer@gmail.com",
  "password": "123123"
}
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Register.jsx          # Registration form component
│   ├── Register.css          # Registration styles
│   ├── Login.jsx             # Login form component
│   ├── Login.css             # Login styles
│   ├── Dashboard.jsx         # User dashboard component
│   └── Dashboard.css         # Dashboard styles
├── services/
│   └── api.js                # Axios configuration and API setup
├── utils/
│   └── validation.js         # Form validation functions
├── App.js                    # Main app component with routing
└── index.js                  # Application entry point
```

## ✅ Validation Rules

### Registration Form
- **Full Name**: Required
- **Username**: Required
- **Email**: Required, must be valid email format
- **Country**: Required (dropdown selection)
- **Mobile Number**: Required, must be exactly 10 digits
- **Password**: Required, minimum 6 characters
- **Referral ID**: Optional

### Login Form
- **Login ID**: Required (email or username)
- **Password**: Required

## 🎨 UI Features

### Design Elements
- Gradient purple background (from #667eea to #764ba2)
- White card containers with rounded corners
- Smooth slide-up animations on page load
- Hover effects on buttons and cards
- Focus states with blue borders and shadows
- Error states with red borders
- Responsive grid layout for dashboard

### Color Palette
- Primary: #667eea (Purple Blue)
- Secondary: #764ba2 (Purple)
- Text: #1a202c (Dark Gray)
- Subtitle: #718096 (Medium Gray)
- Border: #e2e8f0 (Light Gray)
- Error: #fc8181 (Red)

## 📱 Responsive Breakpoints

- Desktop: > 768px
- Mobile: ≤ 768px
- Form max-width: 480px (Register/Login)
- Dashboard max-width: 900px

## 🧪 Testing

Comprehensive test cases are documented in `TEST_CASES.md`, covering:
- Field validation tests
- API integration tests
- UI/UX tests
- Authentication flow tests
- Performance tests
- Browser compatibility tests
- Security tests

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

### Deploy to Netlify
1. Build the project:
```bash
npm run build
```

2. Drag and drop the `build` folder to [Netlify](https://app.netlify.com/drop)

## 📊 Performance Optimizations

- **Time Complexity**: O(1) for form validations
- **Space Complexity**: O(1) for state management
- **Code Organization**: Modular component structure
- **Reusability**: Shared validation utilities
- **Clean Code**: Well-commented and readable

## 🔒 Security Features

- Password masking in input fields
- Client-side validation before API calls
- Secure API key in headers
- LocalStorage for session management
- Error handling without exposing sensitive data

## 📝 Code Quality

- Clean, organized, and readable code
- Proper comments for complex logic
- Consistent naming conventions
- Modular component structure
- Separation of concerns (components, services, utils)

## 🐛 Known Issues & Solutions

- Ensure API key is valid and not expired
- Check network connectivity for API calls
- Clear localStorage if experiencing login issues
- Use correct field names matching API requirements

## 👥 Author

Developed as part of a technical assessment

## 📄 License

This project is created for assessment purposes.

## 📞 Support

For any queries, contact: hr@ultimez.com
