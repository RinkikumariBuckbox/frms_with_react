import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const transactionTrends = [
  { month: "May", transactions: 400 },
  { month: "Jun", transactions: 500 },
  { month: "Jul", transactions: 700 },
  { month: "Aug", transactions: 600 },
  { month: "Sep", transactions: 750 },
  { month: "Oct", transactions: 800 },
  { month: "Nov", transactions: 820 },
  { month: "Dec", transactions: 880 },
];
const TxnTrends = () => {
  return (
    <div className="bg-white p-4 rounded shadow border">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-md font-semibold">Transaction Trends</h2>
        <select className="text-sm border rounded px-2 py-1 text-gray-600">
          <option>Last 12 Months</option>
        </select>
      </div>
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={transactionTrends}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="transactions"
              stroke="#6366f1"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
export default TxnTrends;
