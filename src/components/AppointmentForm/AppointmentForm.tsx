import React, { useEffect } from "react";
import "./AppointmentForm.css"; // Adjust the path if necessary
import { useForm } from "react-hook-form";
import { Appointment, useAppointments } from "../../context/AppointmentContext";
import { useNavigate, useParams } from "react-router-dom";

const CreateAppointmentForm: React.FC = () => {
  const { appointmentId } = useParams<{ appointmentId: string }>();
  const { appointments, addAppointment, updateAppointment } = useAppointments();
  const navigate = useNavigate();
  
  // Initialize react-hook-form
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<Appointment>();

  // Set form default values when editing an existing appointment
  useEffect(() => {
    if (appointmentId) {
      const appointmentToEdit = appointments.find(
        (a) => a.id === parseInt(appointmentId)
      );
      if (appointmentToEdit) {
        const validKeys: (keyof Appointment)[] = [
          "id",
          "patientName",
          "doctor",
          "dateTime",
          "purpose",
          "contactInfo",
        ];
        validKeys.forEach((key) => {
          setValue(key, appointmentToEdit[key]);
        });
      }
    }
  }, [appointmentId, appointments, setValue]);

  const onSubmit = (data: Appointment) => {
    if (data.id) {
      updateAppointment(data);
    } else {
      addAppointment({ ...data, id: Date.now() });
    }
    navigate("/appointments");
  };

  const handleBack = () => {
    navigate("/appointments");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Patient Name:
        <input
          {...register("patientName", { required: "Patient name is required" })}
        />
        {errors.patientName && (
          <p className="error-message">{errors.patientName.message}</p>
        )}
      </label>
      <label>
        Doctor or Department:
        <input
          {...register("doctor", { required: "Doctor's name is required" })}
        />
        {errors.doctor && (
          <p className="error-message">{errors.doctor.message}</p>
        )}
      </label>
      <label>
        Date and Time:
        <input
          type="datetime-local"
          {...register("dateTime", { required: "Date and time are required" })}
        />
        {errors.dateTime && (
          <p className="error-message">{errors.dateTime.message}</p>
        )}
      </label>
      <label>
        Purpose of Visit:
        <input
          {...register("purpose", { required: "Purpose is required" })}
        />
        {errors.purpose && (
          <p className="error-message">{errors.purpose.message}</p>
        )}
      </label>
      <label>
        Contact Info:
        <input
          {...register("contactInfo", { required: "Contact info is required" })}
        />
        {errors.contactInfo && (
          <p className="error-message">{errors.contactInfo.message}</p>
        )}
      </label>
      <button type="submit">Schedule Appointment</button>
      <button type="button" onClick={handleBack} className="back-button">
        Back to List
      </button>
    </form>
  );
};

export default CreateAppointmentForm;
