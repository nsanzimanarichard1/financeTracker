import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { date: "Jan 1", balance: 2400 },
  { date: "Jan 5", balance: 2250 },
  { date: "Jan 10", balance: 3000 },
  { date: "Jan 15", balance: 2000 },
  { date: "Jan 20", balance: 2200 },
  { date: "Jan 25", balance: 2500 },
  { date: "Today", balance: 2200 }
];

const BalanceTrend = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm w-full mx-auto ">
      <h2 className="text-lg font-bold mb-4 text-left">Balance Trend</h2>

      <div className="w-full h-72   ">
        <ResponsiveContainer width="100%" height="100%" >
          <LineChart data={data} margin={{ top: 20, right: 20, left: 0, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="balance"
              stroke="#10b981"  // green line
              strokeWidth={3}
              dot={false}       // hide dots for sleek look
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BalanceTrend;
