import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { registerValidation } from "../utils/validation";
import Toast from "./Toast";
import "./Register.css";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    full_name: "",
    username: "",
    referral_id: "",
    email_id: "",
    country_row_id: "",
    mobile_number: "",
    password: ""
  });
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const showToast = (message, type = "error") => {
    setToast({ message, type });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = registerValidation(form);
    if (Object.keys(err).length) {
      setErrors(err);
      return;
    }
    try {
      const res = await api.post("/user/register", form);
      if (res.data && res.data.status === true) {
        showToast("Registration successful! Redirecting to login...", "success");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        // Handle API error messages
        const errorMsg = res.data?.message?.alert_message || 
                        res.data?.message?.email_id || 
                        res.data?.message?.username ||
                        res.data?.message?.mobile_number ||
                        "Registration failed";
        showToast(errorMsg, "error");
      }
    } catch (error) {
      const errorMsg = error.response?.data?.message?.alert_message || 
                      error.response?.data?.message?.email_id ||
                      error.response?.data?.message?.username ||
                      error.response?.data?.message?.mobile_number ||
                      "Registration failed. Please try again.";
      showToast(errorMsg, "error");
    }
  };

  return (
    <div className="register-container">
      {toast && (
        <Toast 
          message={toast.message} 
          type={toast.type} 
          onClose={() => setToast(null)} 
        />
      )}
      
      <div className="register-card">
        <div className="register-header">
          <h2>Create Account</h2>
          <p className="register-subtitle">Join us today and get started</p>
        </div>
        
        <form onSubmit={handleSubmit} className="register-form">
          <div className="form-group">
            <label htmlFor="full_name">Full Name</label>
            <input 
              id="full_name"
              name="full_name" 
              placeholder="Enter your full name" 
              onChange={handleChange}
              className={errors.full_name ? "input-error" : ""}
            />
            {errors.full_name && <span className="error-message">{errors.full_name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input 
              id="username"
              name="username" 
              placeholder="Choose a username" 
              onChange={handleChange}
              className={errors.username ? "input-error" : ""}
            />
            {errors.username && <span className="error-message">{errors.username}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email_id">Email Address</label>
            <input 
              id="email_id"
              name="email_id" 
              type="email"
              placeholder="your.email@example.com" 
              onChange={handleChange}
              className={errors.email_id ? "input-error" : ""}
            />
            {errors.email_id && <span className="error-message">{errors.email_id}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="country_row_id">Country</label>
            <select 
              id="country_row_id"
              name="country_row_id" 
              value={form.country_row_id}
              onChange={handleChange}
              className={errors.country_row_id ? "input-error" : ""}
              required
            >
              <option value="">Select your country</option>
              <option value="101">India</option>
              <option value="1">United States</option>
              <option value="2">United Kingdom</option>
              <option value="3">Canada</option>
              <option value="4">Australia</option>
              <option value="5">Germany</option>
              <option value="6">France</option>
              <option value="7">Singapore</option>
              <option value="8">United Arab Emirates</option>
              <option value="9">Japan</option>
            </select>
            {errors.country_row_id && <span className="error-message">{errors.country_row_id}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="mobile_number">Mobile Number</label>
            <input 
              id="mobile_number"
              name="mobile_number" 
              placeholder="Enter your mobile number" 
              onChange={handleChange}
              className={errors.mobile_number ? "input-error" : ""}
            />
            {errors.mobile_number && <span className="error-message">{errors.mobile_number}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              id="password"
              type="password" 
              name="password" 
              placeholder="Create a strong password" 
              onChange={handleChange}
              className={errors.password ? "input-error" : ""}
            />
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="referral_id">Referral ID (Optional)</label>
            <input 
              id="referral_id"
              name="referral_id" 
              placeholder="Enter referral code if you have one" 
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="register-button">
            Create Account
          </button>

          <div className="login-link">
            Already have an account? <span onClick={() => navigate("/login")}>Sign In</span>
          </div>
        </form>
      </div>
    </div>
  );
}
