import { useNavigate } from "react-router-dom";
import "./AppointmentList.css"; // Adjust the path if necessary
import { useAppointments } from "../../context/AppointmentContext";

const AppointmentList: React.FC = () => {
  const { appointments, deleteAppointment } =
    useAppointments();
  const navigate = useNavigate();

  // Function to handle button click to navigate to the appointment form
  const handleCreateAppointment = () => {
    navigate("/appointments/new");
  };

  const handleDelete = (id: number | null) => {
    if (id === null) {
      console.error("Attempted to delete an appointment without a valid id.");
      return; // Optionally handle this case more gracefully or notify the user
    }

    if (window.confirm("Are you sure you want to delete this appointment?")) {
      deleteAppointment(id);
    }
  };

  const handleEdit = (id: number | null) => {
    if (id === null) {
      console.error("Attempted to edit an appointment without a valid id.");
      return; // Optionally handle this case more gracefully or notify the user
    }

    navigate(`/appointment/edit/${id}`);
  };

  return (
    <div className="appointment-container">
      <h2 className="appointment-header">Appointments</h2>
      <button
        onClick={handleCreateAppointment}
        className="create-appointment-button"
      >
        Create Appointment
      </button>
      <ul className="appointment-list">
        {appointments.map((appointment) => (
          <li key={appointment.id} className="appointment-item">
            <div className="appointment-content">
              {`${appointment.patientName} with Dr. ${appointment.doctor} on ${appointment.dateTime}`}
            </div>
            <div className="button-container">
              <button
                onClick={() => handleEdit(appointment.id)}
                className="edit-button"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(appointment.id)}
                className="delete-button"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentList;
