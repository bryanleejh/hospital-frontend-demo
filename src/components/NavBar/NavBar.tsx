import React from "react";
import { useAuth } from "../../context/AuthContext"; // Adjust path as needed
import { useNavigate } from "react-router-dom";
import "./Navbar.css"; // Ensure you import the CSS file

const Navbar: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/"); // Redirect to login page after logout
  };

  return (
    <nav className="navbar">
      {isAuthenticated && (
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      )}
    </nav>
  );
};

export default Navbar;
