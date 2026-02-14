import { useEffect } from "react";
import "./Toast.css";

/**
 * Toast notification component
 * Displays success/error messages with auto-dismiss
 * @param {string} message - Message to display
 * @param {string} type - Type of toast (success/error)
 * @param {function} onClose - Callback when toast closes
 */
export default function Toast({ message, type = "error", onClose }) {
  useEffect(() => {
    // Auto-close toast after 3 seconds
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`toast toast-${type}`}>
      <div className="toast-icon">
        {type === "error" ? "❌" : "✅"}
      </div>
      <div className="toast-content">
        <p className="toast-message">{message}</p>
      </div>
      <button className="toast-close" onClick={onClose}>
        ×
      </button>
    </div>
  );
}
