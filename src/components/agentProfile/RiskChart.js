// import MetricCard from "./MetricCard";
// import RiskItem from "./RiskItem";
// import React from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   Legend,
//   ReferenceLine,
// } from "recharts";

// const riskData = [
//   { week: "Week 1", score: 30 },
//   { week: "Week 2", score: 35 },
//   { week: "Week 3", score: 45 },
//   { week: "Week 4", score: 40 },
//   { week: "Week 5", score: 50 },
//   { week: "Week 6", score: 60 },
//   { week: "Week 7", score: 78, high: true },
//   { week: "Week 8", score: 75, high: true },
//   { week: "Week 9", score: 90, high: true },
//   { week: "Week 10", score: 88, high: true },
// ];
// const RiskChart = () => {
//   return (
//     <div className="space-y-4 bg-gray-50  text-sm mb-4">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
//         <div className="bg-white rounded-xl shadow p-4">
//           <h2 className="font-semibold mb-4">Common Risk Factors</h2>
//           <RiskItem
//             title="Transaction Velocity"
//             impact="High"
//             color="red"
//             desc="Agents processing transactions at unusual speeds"
//           />
//           <RiskItem
//             title="After-Hours Activity"
//             impact="Medium"
//             color="yellow"
//             desc="Transactions processed outside normal business hours"
//           />
//           <RiskItem
//             title="Manual Overrides"
//             impact="High"
//             color="red"
//             desc="Frequency of bypassing automated security checks"
//           />
//           <RiskItem
//             title="Customer Complaints"
//             impact="Medium"
//             color="yellow"
//             desc="Rate of complaints against specific agents"
//           />
//           <RiskItem
//             title="Unusual Access Patterns"
//             impact="High"
//             color="red"
//             desc="Accessing records with no business need"
//           />
//         </div>

//         {/* Agent Risk Trend */}
//         <div className="bg-white rounded-xl shadow p-4">
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="font-semibold">Agent Risk Trend</h2>
//             <div className="space-x-2 text-xs">
//               <button className="text-blue-600 font-medium">Weekly</button>
//               <button className="text-gray-400">Monthly</button>
//               <button className="text-gray-400">Quarterly</button>
//             </div>
//           </div>
//           <div className="h-64">
//             <ResponsiveContainer width="100%" height="100%">
//               <BarChart data={riskData}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="week" />
//                 <YAxis domain={[0, 100]} />
//                 <Tooltip />
//                 <Legend verticalAlign="top" height={36} />
//                 <ReferenceLine
//                   y={80}
//                   label="High Risk"
//                   stroke="red"
//                   strokeDasharray="3 3"
//                 />
//                 <Bar
//                   dataKey="score"
//                   name="Average"
//                   fill="#A0AEC0"
//                   isAnimationActive={false}
//                   radius={[4, 4, 0, 0]}
//                 />
//                 <Bar
//                   dataKey={(data) => (data.high ? data.score : 0)}
//                   name="High Risk"
//                   fill="#F56565"
//                   isAnimationActive={false}
//                   radius={[4, 4, 0, 0]}
//                 />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//       </div>

//       {/* Agent Performance Metrics */}
//       <div className="bg-white rounded-xl shadow p-4">
//         <div className="mb-4 flex justify-between items-center">
//           <h2 className="font-semibold">Agent Performance Metrics</h2>
//           <div className="space-x-2 text-xs">
//             <button className="px-2 py-1 rounded bg-blue-100 text-blue-700">
//               All Agents
//             </button>
//             <button className="text-gray-500">High Risk</button>
//             <button className="text-gray-500">Medium Risk</button>
//             <button className="text-gray-500">Low Risk</button>
//           </div>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           <MetricCard
//             title="Transaction Volume"
//             value="Average: 215 transactions"
//             note="High risk agents process 32% more transactions"
//           />
//           <MetricCard
//             title="Manual Overrides"
//             value="Average: 8.4 overrides"
//             note="High risk agents: 240% more manual overrides"
//           />
//           <MetricCard
//             title="Chargeback Rate"
//             value="Industry Avg: 1.2%"
//             note="High risk agents: 3.2% chargeback rate"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RiskChart;



import MetricCard from "./MetricCard";
import RiskItem from "./RiskItem";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  ReferenceLine,
} from "recharts";

const riskData = [
  { week: "Week 1", score: 30 },
  { week: "Week 2", score: 35 },
  { week: "Week 3", score: 45 },
  { week: "Week 4", score: 40 },
  { week: "Week 5", score: 50 },
  { week: "Week 6", score: 60 },
  { week: "Week 7", score: 78, high: true },
  { week: "Week 8", score: 75, high: true },
  { week: "Week 9", score: 90, high: true },
  { week: "Week 10", score: 88, high: true },
];

const RiskChart = () => {
  return (
    <div className="space-y-4 bg-gray-50 text-sm mb-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Common Risk Factors with animated bars */}
        <div className="bg-white rounded-xl shadow p-4">
          <h2 className="font-semibold mb-4">Common Risk Factors</h2>
          <RiskItem
            title="Transaction Velocity"
            impact="High"
            color="red"
            desc="Agents processing transactions at unusual speeds"
          />
          <RiskItem
            title="After-Hours Activity"
            impact="Medium"
            color="yellow"
            desc="Transactions processed outside normal business hours"
          />
          <RiskItem
            title="Manual Overrides"
            impact="High"
            color="red"
            desc="Frequency of bypassing automated security checks"
          />
          <RiskItem
            title="Customer Complaints"
            impact="Medium"
            color="yellow"
            desc="Rate of complaints against specific agents"
          />
          <RiskItem
            title="Unusual Access Patterns"
            impact="High"
            color="red"
            desc="Accessing records with no business need"
          />
        </div>

        {/* Agent Risk Trend */}
        <div className="bg-white rounded-xl shadow p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold">Agent Risk Trend</h2>
            <div className="space-x-2 text-xs">
              <button className="text-blue-600 font-medium">Weekly</button>
              <button className="text-gray-400">Monthly</button>
              <button className="text-gray-400">Quarterly</button>
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={riskData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Legend verticalAlign="top" height={36} />
                <ReferenceLine
                  y={80}
                  label="High Risk"
                  stroke="red"
                  strokeDasharray="3 3"
                />
                <Bar
                  dataKey="score"
                  name="Average"
                  fill="#A0AEC0"
                  isAnimationActive={false}
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  dataKey={(data) => (data.high ? data.score : 0)}
                  name="High Risk"
                  fill="#F56565"
                  isAnimationActive={false}
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Agent Performance Metrics */}
      <div className="bg-white rounded-xl shadow p-4">
        <div className="mb-4 flex justify-between items-center">
          <h2 className="font-semibold">Agent Performance Metrics</h2>
          <div className="space-x-2 text-xs">
            <button className="px-2 py-1 rounded bg-blue-100 text-blue-700">
              All Agents
            </button>
            <button className="text-gray-500">High Risk</button>
            <button className="text-gray-500">Medium Risk</button>
            <button className="text-gray-500">Low Risk</button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <MetricCard
            title="Transaction Volume"
            value="Average: 215 transactions"
            note="High risk agents process 32% more transactions"
          />
          <MetricCard
            title="Manual Overrides"
            value="Average: 8.4 overrides"
            note="High risk agents: 240% more manual overrides"
          />
          <MetricCard
            title="Chargeback Rate"
            value="Industry Avg: 1.2%"
            note="High risk agents: 3.2% chargeback rate"
          />
        </div>
      </div>
    </div>
  );
};

export default RiskChart;
