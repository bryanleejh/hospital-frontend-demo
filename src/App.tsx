import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm/LoginForm";
import AppointmentList from "./components/AppointmentList/AppointmentList";

const App: React.FC = () => {
  const handleLogin = (username: string, password: string) => {
    console.log("Logging in with:", username, password);
    // Implement your login logic here
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm onLogin={handleLogin} />} />
        <Route path="/appointments" element={<AppointmentList />} />
      </Routes>
    </Router>
  );
};

export default App;
