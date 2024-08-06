import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm/LoginForm";
import AppointmentList from "./components/AppointmentList/AppointmentList";
import { Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

const App: React.FC = () => {
  const auth = useAuth();

  const handleLogin = (username: string, password: string) => {
    console.log("Logging in with:", username, password);
    // Implement your login logic here
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm onLogin={handleLogin} />} />
        <Route
          path="/appointments"
          element={
            auth.isAuthenticated ? <AppointmentList /> : <Navigate to="/" />
          }
        />
        ;
      </Routes>
    </Router>
  );
};

export default App;
