import React, { useState } from "react";
import "./AppointmentForm.css"; // Adjust the path if necessary
import { useAppointments } from "../../context/AppointmentContext";
import { useNavigate } from "react-router-dom";

export interface BaseAppointment {
  patientName: string;
  doctor: string;
  dateTime: string;
  purpose: string;
  contactInfo: string;
}

const CreateAppointmentForm: React.FC = () => {
  const { addAppointment } = useAppointments();
  const navigate = useNavigate();
  const [formState, setFormState] = useState<BaseAppointment>({
    patientName: "",
    doctor: "",
    dateTime: "",
    purpose: "",
    contactInfo: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add logic to validate and process the form submission
    addAppointment(formState);
    console.log("Form Submitted:", formState);
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
          value={formState.patientName}
          onChange={handleChange}
        />
      </label>
      <label>
        Doctor or Department:
        <input
          type="text"
          name="doctor"
          value={formState.doctor}
          onChange={handleChange}
        />
      </label>
      <label>
        Date and Time:
        <input
          type="datetime-local"
          name="dateTime"
          value={formState.dateTime}
          onChange={handleChange}
        />
      </label>
      <label>
        Purpose of Visit:
        <textarea
          name="purpose"
          value={formState.purpose}
          onChange={handleChange}
        ></textarea>
      </label>
      <label>
        Contact Info:
        <input
          type="text"
          name="contactInfo"
          value={formState.contactInfo}
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
