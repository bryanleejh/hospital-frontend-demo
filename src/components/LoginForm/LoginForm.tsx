import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext"; // Import useAuth
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";

interface LoginFormProps {
  onLogin: (username: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const auth = useAuth(); // Get auth context
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (username === "user" && password === "p@ss") {
      // Simple check for demonstration
      auth.login(); // Update the auth state to logged in
      navigate("/appointments"); // Navigate to the appointment list
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="password"
          className="form-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit" className="form-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
