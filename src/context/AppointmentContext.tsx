import React, { createContext, useContext, useState, ReactNode } from "react";
import { BaseAppointment } from "../components/AppointmentForm/AppointmentForm";

let nextId = 0; // This counter will increment to create unique ids

interface Appointment extends BaseAppointment {
  id: number;
}

interface AppointmentContextType {
  appointments: Appointment[];
  addAppointment: (newAppointment: BaseAppointment) => void;
}

const AppointmentContext = createContext<AppointmentContextType | undefined>(
  undefined
);

export const AppointmentProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  const addAppointment = (newAppointment: BaseAppointment) => {
    const appointmentWithId = { ...newAppointment, id: nextId++ }; // Assign an id to each new appointment
    setAppointments([...appointments, appointmentWithId]);
  };

  return (
    <AppointmentContext.Provider value={{ appointments, addAppointment }}>
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
