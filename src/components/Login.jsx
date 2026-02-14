import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { loginValidation } from "../utils/validation";
import Toast from "./Toast";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ login_id: "", password: "" });
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const showToast = (message, type = "error") => {
    setToast({ message, type });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = loginValidation(form);
    if (Object.keys(err).length) {
      setErrors(err);
      return;
    }
    try {
      const res = await api.post("/user/login", form);
      
      // Check if login was successful
      if (res.data && res.data.status === true) {
        localStorage.setItem("user", JSON.stringify(res.data));
        showToast("Login successful! Redirecting...", "success");
        setTimeout(() => {
          navigate("/dashboard");
        }, 1500);
      } else {
        // Handle failed login
        const errorMsg = res.data?.message?.alert_message || "Invalid login credentials";
        showToast(errorMsg, "error");
      }
    } catch (error) {
      const errorMsg = error.response?.data?.message?.alert_message || "Login failed. Please try again.";
      showToast(errorMsg, "error");
    }
  };

  return (
    <div className="login-container">
      {toast && (
        <Toast 
          message={toast.message} 
          type={toast.type} 
          onClose={() => setToast(null)} 
        />
      )}
      
      <div className="login-card">
        <div className="login-header">
          <h2>Welcome Back</h2>
          <p className="login-subtitle">Sign in to continue to your account</p>
        </div>
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="login_id">Email or Username</label>
            <input 
              id="login_id"
              name="login_id" 
              placeholder="Enter your email or username" 
              onChange={handleChange}
              className={errors.login_id ? "input-error" : ""}
            />
            {errors.login_id && <span className="error-message">{errors.login_id}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              id="password"
              type="password" 
              name="password" 
              placeholder="Enter your password" 
              onChange={handleChange}
              className={errors.password ? "input-error" : ""}
            />
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>

          <button type="submit" className="login-button">
            Sign In
          </button>

          <div className="register-link">
            Don't have an account? <span onClick={() => navigate("/register")}>Create Account</span>
          </div>
        </form>
      </div>
    </div>
  );
}
