import React from "react";
import AppointmentBarChart, { AppointmentData } from "../../components/AppointmentBarChart/AppointmentBarChart";
import { useAppointments } from "../../context/AppointmentContext";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard: React.FC = () => {
  const { appointments } = useAppointments();
  const navigate = useNavigate();

  // Prepare data for the chart
  const data = appointments.reduce<AppointmentData[]>((acc, appointment) => {
    const { doctor } = appointment;
    const existing = acc.find((item) => item.doctor === doctor);
    if (existing) {
      existing.appointments += 1;
    } else {
      acc.push({ doctor: doctor, appointments: 1 });
    }
    return acc;
  }, []);

  const handleBackClick = () => {
    navigate("/appointments");
  };

  return (
    <div className="dashboard-container">
      <h1>Appointment Dashboard</h1>
      <AppointmentBarChart data={data} />
      <button onClick={handleBackClick} className="back-button">
        Back to Dashboard
      </button>
    </div>
  );
};

export default Dashboard;
