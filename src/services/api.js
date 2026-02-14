/**
 * API Service Configuration
 * Axios instance with base URL and required headers
 */
import axios from "axios";

// Create axios instance with default configuration
const api = axios.create({
  baseURL: "https://lobster-app-ddwng.ondigitalocean.app",
  headers: {
    // Required API key for authentication
    api_key: "Z9Q7WKEY7ORGBUFGN3EG1QS5Y7FG8DU29GHKKSZH",
    "Content-Type": "application/json"
  }
});

export default api;
