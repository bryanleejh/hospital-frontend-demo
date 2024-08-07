import { useNavigate } from "react-router-dom";
import "./AppointmentList.css"; // Adjust the path if necessary
import { useAppointments } from "../../context/AppointmentContext";

const AppointmentList: React.FC = () => {
  const { appointments } = useAppointments();

  const navigate = useNavigate();

  // Function to handle button click to navigate to the appointment form
  const handleCreateAppointment = () => {
    navigate("/create-appointment"); // Adjust the path as needed
  };

  return (
    <div className="appointment-container">
      <h2 className="appointment-header">Appointments</h2>
      <button
        onClick={handleCreateAppointment}
        className="create-appointment-button"
      >
        Create New Appointment
      </button>
      <ul className="appointment-list">
        {appointments.map((appointment, index) => (
          <li key={index} className="appointment-item">
            {`${appointment.patientName} with Dr. ${appointment.doctor} on ${appointment.dateTime}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentList;
