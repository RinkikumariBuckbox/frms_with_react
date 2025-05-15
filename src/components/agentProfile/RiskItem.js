// function RiskItem({ title, desc, impact, color }) {
//   const barColors = {
//     red: "bg-red-500",
//     yellow: "bg-yellow-400",
//     gray: "bg-gray-400",
//   };

//   return (
//     <div className="mb-4">
//       <div className="flex justify-between items-center text-sm font-medium">
//         <span>{title}</span>
//         <span className={`text-${color}-600`}>{impact} Impact</span>
//       </div>
//       <p className="text-xs text-gray-500 mb-1">{desc}</p>
//       <div className="w-full h-1.5 rounded-full bg-gray-200">
//         <div className={`h-1.5 rounded-full ${barColors[color]} w-3/4`}></div>
//       </div>
//     </div>
//   );
// }

// export default RiskItem;

import React, { useEffect, useState } from "react";

const impactWidths = {
  High: 90,
  Medium: 60,
  Low: 30,
};

const RiskItem = ({ title, impact, color, desc }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setWidth(impactWidths[impact] || 0);
    }, 100);
    return () => clearTimeout(timeout);
  }, [impact]);

  const barColor =
    color === "red"
      ? "bg-red-500"
      : color === "yellow"
      ? "bg-yellow-400"
      : "bg-green-500";

  const textColor =
    color === "red"
      ? "text-red-500"
      : color === "yellow"
      ? "text-yellow-500"
      : "text-green-500";

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="font-medium text-gray-800">{title}</span>
        <span className={`text-sm font-semibold ${textColor}`}>
          {impact} Impact
        </span>
      </div>
      <p className="text-xs text-gray-500 mb-1">{desc}</p>
      <div className="h-2 bg-gray-200 rounded overflow-hidden">
        <div
          className={`h-2 ${barColor} transition-all duration-1000`}
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

export default RiskItem;

