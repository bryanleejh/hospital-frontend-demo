import React, { useState } from "react";

interface AppointmentFormState {
  patientName: string;
  doctor: string;
  dateTime: string;
  purpose: string;
  contactInfo: string;
}

const CreateAppointmentForm: React.FC = () => {
  const [formState, setFormState] = useState<AppointmentFormState>({
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
    console.log("Submitting Form:", formState);
    // Add logic to validate and process the form submission
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
    </form>
  );
};

export default CreateAppointmentForm;
