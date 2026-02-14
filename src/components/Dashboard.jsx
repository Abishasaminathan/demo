import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

export default function Dashboard() {
  const navigate = useNavigate();
  const userData = localStorage.getItem("user");
  
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  if (!userData) return (
    <div className="dashboard-container">
      <div className="no-user">
        <h3>No User Data</h3>
        <button onClick={() => navigate("/login")}>Go to Login</button>
      </div>
    </div>
  );

  // Parse user data and handle nested structures
  const user = JSON.parse(userData);
  
  // Check if login was actually successful
  if (user.status === false) {
    localStorage.removeItem("user");
    return (
      <div className="dashboard-container">
        <div className="no-user">
          <h3>Please Login</h3>
          <p style={{ color: '#718096', marginBottom: '20px' }}>You need to login to access the dashboard</p>
          <button onClick={() => navigate("/login")}>Go to Login</button>
        </div>
      </div>
    );
  }
  
  // Extract user info from message object (API response structure)
  const userInfo = user.message || user.data || user;

  // Country mapping
  const countryMap = {
    "101": "India",
    "1": "United States",
    "2": "United Kingdom",
    "3": "Canada",
    "4": "Australia",
    "5": "Germany",
    "6": "France",
    "7": "Singapore",
    "8": "United Arab Emirates",
    "9": "Japan"
  };

  const countryName = countryMap[userInfo.country_row_id] || userInfo.country_row_id || "N/A";

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <div className="dashboard-header">
          <div>
            <h2>User Dashboard</h2>
            <p className="dashboard-subtitle">Welcome back, {userInfo.full_name || userInfo.username || "User"}!</p>
          </div>
          <button onClick={handleLogout} className="logout-button">Logout</button>
        </div>

        <div className="user-details">
          <div className="detail-item">
            <div className="detail-icon">👤</div>
            <div className="detail-content">
              <span className="detail-label">Full Name</span>
              <span className="detail-value">{userInfo.full_name || "N/A"}</span>
            </div>
          </div>

          <div className="detail-item">
            <div className="detail-icon">🔖</div>
            <div className="detail-content">
              <span className="detail-label">Username</span>
              <span className="detail-value">{userInfo.username || "N/A"}</span>
            </div>
          </div>

          <div className="detail-item">
            <div className="detail-icon">📧</div>
            <div className="detail-content">
              <span className="detail-label">Email</span>
              <span className="detail-value">{userInfo.email_id || "N/A"}</span>
            </div>
          </div>

          <div className="detail-item">
            <div className="detail-icon">📱</div>
            <div className="detail-content">
              <span className="detail-label">Mobile Number</span>
              <span className="detail-value">{userInfo.mobile_number || "N/A"}</span>
            </div>
          </div>

          <div className="detail-item">
            <div className="detail-icon">🌍</div>
            <div className="detail-content">
              <span className="detail-label">Country</span>
              <span className="detail-value">{countryName}</span>
            </div>
          </div>

          <div className="detail-item">
            <div className="detail-icon">🎁</div>
            <div className="detail-content">
              <span className="detail-label">Referral Username</span>
              <span className="detail-value">{userInfo.referral_username || "N/A"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
