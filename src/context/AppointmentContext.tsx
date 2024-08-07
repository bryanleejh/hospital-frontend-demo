import React, { createContext, useContext, useState, ReactNode } from "react";

let nextId = 0; // This counter will increment to create unique ids

export interface Appointment {
  id: number | null;
  patientName: string;
  doctor: string;
  dateTime: string;
  purpose: string;
  contactInfo: string;
}

interface AppointmentContextType {
  appointments: Appointment[];
  addAppointment: (newAppointment: Appointment) => void;
  deleteAppointment: (id: number) => void;
  updateAppointment: (updatedAppointment: Appointment) => void;
}

const AppointmentContext = createContext<AppointmentContextType | undefined>(
  undefined
);

export const AppointmentProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  const addAppointment = (newAppointment: Appointment) => {
    const appointmentWithId = { ...newAppointment, id: nextId++ }; // Assign an id to each new appointment
    setAppointments([...appointments, appointmentWithId]);
  };

  const deleteAppointment = (id: number) => {
    setAppointments((prevAppointments) =>
      prevAppointments.filter((appointment) => appointment.id !== id)
    );
  };

  const updateAppointment = (updatedAppointment: Appointment) => {
    setAppointments((prevAppointments) =>
      prevAppointments.map((appointment) =>
        appointment.id === updatedAppointment.id
          ? updatedAppointment
          : appointment
      )
    );
  };

  return (
    <AppointmentContext.Provider
      value={{
        appointments,
        addAppointment,
        deleteAppointment,
        updateAppointment,
      }}
    >
      {children}
    </AppointmentContext.Provider>
  );
};

export const useAppointments = () => {
  const context = useContext(AppointmentContext);
  if (!context)
    throw new Error(
      "useAppointments must be used within an AppointmentProvider"
    );
  return context;
};
