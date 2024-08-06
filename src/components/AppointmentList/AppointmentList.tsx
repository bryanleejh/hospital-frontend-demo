import React from "react";

const AppointmentList: React.FC = () => {
  const appointments: string[] = [
    "Check-up at 10:00",
    "Dental at 14:00",
    "Surgery at 16:00",
  ];

  return (
    <ul>
      {appointments.map((appointment, index) => (
        <li key={index}>{appointment}</li>
      ))}
    </ul>
  );
};

export default AppointmentList;
