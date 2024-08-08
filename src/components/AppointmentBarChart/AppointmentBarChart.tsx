import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export interface AppointmentData {
  doctor: string;
  appointments: number;
}

interface AppointmentBarChartProps {
  data: AppointmentData[];
}

const AppointmentBarChart: React.FC<AppointmentBarChartProps> = ({ data }) => {
  return (
    <BarChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="doctor" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="appointments" fill="#8884d8" />
    </BarChart>
  );
};

export default AppointmentBarChart;
