import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const customerTrends = [
  {
    name: "John Doe",
    id: "CU-2938",
    initials: "JD",
    risk: "91%",
    riskChange: "+12% in 30 days",
    riskFactors: "Multiple payment methods, Transaction velocity, Large orders",
    chartData: [
      { month: "Jan", value: 20, color: "#22c55e" },
      { month: "Feb", value: 40, color: "#facc15" },
      { month: "Mar", value: 60, color: "#facc15" },
      { month: "Apr", value: 80, color: "#fca5a5" },
    ],
  },
  {
    name: "Alice Smith",
    id: "CU-7621",
    initials: "AS",
    risk: "87%",
    riskChange: "+23% in 30 days",
    riskFactors: "Geographic risk, Device fingerprint, Recent account changes",
    chartData: [
      { month: "Jan", value: 10, color: "#86efac" },
      { month: "Feb", value: 30, color: "#facc15" },
      { month: "Mar", value: 50, color: "#facc15" },
      { month: "Apr", value: 70, color: "#fca5a5" },
    ],
  },
];
const CusRiskProfileTrends = () => {
  return (
    <div className="bg-white p-4 rounded shadow border">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Customer Risk Profile Trends</h2>
        <button className="text-sm text-blue-600 hover:underline">
          View All
        </button>
      </div>

      {customerTrends.map((customer, index) => (
        <div key={index} className="bg-white p-4 border rounded-lg mb-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-semibold text-gray-600">
              {customer.initials}
            </div>
            <div>
              <div className="font-medium text-sm">{customer.name}</div>
              <div className="text-xs text-gray-500">ID: {customer.id}</div>
            </div>
            <div className="ml-auto text-right text-sm text-red-600 font-semibold">
              Risk: {customer.risk}
              <br />
              <span className="text-xs text-red-400">
                ↑ {customer.riskChange}
              </span>
            </div>
          </div>
          <div className="h-10 w-full mb-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={customer.chartData}
                barGap={2}
                barCategoryGap={10}
              >
                <XAxis
                  dataKey="month"
                  tick={{ fontSize: 10 }}
                  stroke="#d1d5db"
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  content={({ active, payload }) =>
                    active && payload?.length ? (
                      <div className="text-xs p-2 bg-white border rounded shadow">
                        {payload[0].payload.month}: {payload[0].payload.value}
                      </div>
                    ) : null
                  }
                />
                <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                  {customer.chartData.map((entry, i) => (
                    <Cell key={`cell-${i}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="text-xs text-gray-500">
            Key risk factors: {customer.riskFactors}
          </div>
        </div>
      ))}
    </div>
  );
};
export default CusRiskProfileTrends;
