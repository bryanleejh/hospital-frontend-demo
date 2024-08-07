import React, { useEffect, useState } from "react";
import "./AppointmentForm.css"; // Adjust the path if necessary
import { Appointment, useAppointments } from "../../context/AppointmentContext";
import { useNavigate, useParams } from "react-router-dom";

const CreateAppointmentForm: React.FC = () => {
  const { appointmentId } = useParams<{ appointmentId: string }>();
  const { appointments, addAppointment, updateAppointment } = useAppointments();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<Appointment>({
    id: null,
    patientName: "",
    doctor: "",
    dateTime: "",
    purpose: "",
    contactInfo: "",
  });

  // Initialize form data when editing an existing appointment
  useEffect(() => {
    if (appointmentId) {
      const appointmentToEdit = appointments.find(
        (a) => a.id === parseInt(appointmentId)
      );
      if (appointmentToEdit) {
        setFormData(appointmentToEdit);
      }
    }
  }, [appointmentId, appointments]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formData.id !== null) {
      updateAppointment(formData);
    } else {
      addAppointment({ ...formData, id: Date.now() }); // Assuming you're generating IDs on the fly
    }
    navigate("/appointments");
  };

  const handleBack = () => {
    navigate("/appointments"); // Navigate back to the appointment list without saving
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Patient Name:
        <input
          type="text"
          name="patientName"
          value={formData.patientName}
          onChange={handleChange}
        />
      </label>
      <label>
        Doctor or Department:
        <input
          type="text"
          name="doctor"
          value={formData.doctor}
          onChange={handleChange}
        />
      </label>
      <label>
        Date and Time:
        <input
          type="datetime-local"
          name="dateTime"
          value={formData.dateTime}
          onChange={handleChange}
        />
      </label>
      <label>
        Purpose of Visit:
        <textarea
          name="purpose"
          value={formData.purpose}
          onChange={handleChange}
        ></textarea>
      </label>
      <label>
        Contact Info:
        <input
          type="text"
          name="contactInfo"
          value={formData.contactInfo}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Schedule Appointment</button>
      <button type="button" onClick={handleBack} className="back-button">
        Back to List
      </button>
    </form>
  );
};

export default CreateAppointmentForm;
