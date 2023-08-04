import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { lineData } from "../data/chartData";

const LChart = () => {
  return (
    <div className=" w-fit">
      <LineChart
      className=" w-full"
        width={700}
        height={300}
        data={lineData}
        margin={{
          top: 10,
          right: 40,
          left: 0,
          bottom: 10,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="revenue"
          stroke="#8884d8"
          
        />
        <Line type="monotone" dataKey="order" stroke="#82ca9d" activeDot={{ r: 8 }}/>
      </LineChart>
    </div>
  );
};

export default LChart;
