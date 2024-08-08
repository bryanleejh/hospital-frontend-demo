import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import LoginForm from "./components/LoginForm/LoginForm";
import AppointmentList from "./components/AppointmentList/AppointmentList";
import CreateAppointmentForm from "./components/AppointmentForm/AppointmentForm";
import MainLayout from "./components/MainLayout/MainLayout";
import Dashboard from "./components/Dashboard/Dashboard";

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
              auth.isAuthenticated ? <AppointmentList /> : <Navigate to="/" />
            }
          />
          <Route
            path="/appointments/new"
            element={
              auth.isAuthenticated ? (
                <CreateAppointmentForm />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/appointment/edit/:appointmentId"
            element={
              auth.isAuthenticated ? (
                <CreateAppointmentForm />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/chart"
            element={auth.isAuthenticated ? <Dashboard /> : <Navigate to="/" />}
          />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
