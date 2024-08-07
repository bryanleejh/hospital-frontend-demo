import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import LoginForm from "./components/LoginForm/LoginForm";
import AppointmentList from "./components/AppointmentList/AppointmentList";
import CreateAppointmentForm from "./components/AppointmentForm/AppointmentForm";
import MainLayout from "./components/MainLayout/MainLayout";
import { useAuth } from "./context/AuthContext";

const App: React.FC = () => {
  const auth = useAuth();

  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route
            path="/appointments"
            element={
              auth.isAuthenticated ? (
                <AppointmentList />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/create-appointment"
            element={<CreateAppointmentForm />}
          />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
