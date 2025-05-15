// import React from "react";

// const RiskScoreTrends = () => {
//   return (
//     <div className="bg-white rounded-xl shadow p-4 w-full max-w-sm">
//       <div className="flex justify-between items-center mb-2">
//         <div>
//           <div className="text-sm text-gray-600">Current Score</div>
//           <div className="text-xl font-semibold">78</div>
//         </div>
//         <div>
//           <div className="text-sm text-gray-600">30 Days Ago</div>
//           <div className="text-xl font-semibold">65</div>
//         </div>
//         <div className="text-right">
//           <div className="text-sm text-gray-600">Change</div>
//           <div className="text-red-500 font-semibold">▲ 20%</div>
//         </div>
//       </div>
//       <div className="space-y-2">
//         {[
//           {
//             label: "Transaction Volume",
//             level: "High Risk",
//             color: "bg-red-500",
//           },
//           {
//             label: "Geographic Dispersion",
//             level: "Medium Risk",
//             color: "bg-yellow-400",
//           },
//           {
//             label: "Transaction Velocity",
//             level: "High Risk",
//             color: "bg-red-500",
//           },
//           {
//             label: "Customer History",
//             level: "Low Risk",
//             color: "bg-green-500",
//           },
//         ].map((item, index) => (
//           <div key={index} className="text-sm">
//             <div className="flex justify-between">
//               <span className="text-gray-600">{item.label}</span>
//               <span className="font-medium text-gray-800">{item.level}</span>
//             </div>
//             <div className="h-2 bg-gray-200 rounded">
//               <div
//                 className={`${item.color} h-2 rounded`}
//                 style={{ width: "70%" }}
//               ></div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RiskScoreTrends;

import React, { useEffect, useState } from "react";

const RiskScoreTrends = () => {
  const [bars, setBars] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setBars([100, 70, 90, 100]); // Actual bar percentages
    }, 200);
    return () => clearTimeout(timeout);
  }, []);

  const riskItems = [
    {
      label: "Transaction Volume",
      level: "High Risk",
      color: "bg-red-500",
    },
    {
      label: "Geographic Dispersion",
      level: "Medium Risk",
      color: "bg-yellow-400",
    },
    {
      label: "Transaction Velocity",
      level: "High Risk",
      color: "bg-red-500",
    },
    {
      label: "Customer History",
      level: "Low Risk",
      color: "bg-green-500",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow p-4 w-full max-w-sm">
      <div className="flex justify-between items-center mb-2">
        <div>
          <div className="text-sm text-gray-600">Current Score</div>
          <div className="text-xl font-semibold">78</div>
        </div>
        <div>
          <div className="text-sm text-gray-600">30 Days Ago</div>
          <div className="text-xl font-semibold">65</div>
        </div>
        <div className="text-right">
          <div className="text-sm text-gray-600">Change</div>
          <div className="text-red-500 font-semibold">▲ 20%</div>
        </div>
      </div>
      <div className="space-y-2">
        {riskItems.map((item, index) => (
          <div key={index} className="text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">{item.label}</span>
              <span className="font-medium text-gray-800">{item.level}</span>
            </div>
            <div className="h-2 bg-gray-200 rounded overflow-hidden">
              <div
                className={`${item.color} h-2 transition-all duration-1000`}
                style={{ width: `${bars[index]}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RiskScoreTrends;
