// import React from "react";

// const SummaryCard = ({ title, prediction, value, barColor, items }) => {
//   return (
//     <div className="bg-white rounded-xl shadow p-4 w-full max-w-sm">
//       <h3 className="text-sm font-medium text-gray-700">{title}</h3>
//       <div className="flex justify-between items-center text-sm font-semibold my-1">
//         <span>Predicted Next 30 Days</span>
//         <span>{prediction}</span>
//       </div>
//       <div className="h-2 rounded bg-gray-200 overflow-hidden mb-4">
//         <div
//           className={`${barColor} h-2`}
//           style={{ width: `${(parseInt(prediction) / value) * 100}%` }}
//         ></div>
//       </div>
//       <ul className="space-y-1 text-sm">
//         {items.map((item, index) => (
//           <li key={index} className="flex items-center">
//             <span className={`w-2 h-2 rounded-full mr-2 ${item.color}`}></span>
//             <span className="text-gray-600 flex-1">{item.label}</span>
//             <span className="font-medium text-gray-800">{item.value}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SummaryCard;

import React, { useEffect, useState } from "react";

const SummaryCard = ({ title, prediction, value, barColor, items }) => {
  const [barWidth, setBarWidth] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const numeric = parseInt(prediction);
      setBarWidth((numeric / value) * 100);
    }, 100); // Start animation after slight delay
    return () => clearTimeout(timeout);
  }, [prediction, value]);

  return (
    <div className="bg-white rounded-xl shadow p-4 w-full max-w-sm">
      <h3 className="text-sm font-medium text-gray-700">{title}</h3>
      <div className="flex justify-between items-center text-sm font-semibold my-1">
        <span>Predicted Next 30 Days</span>
        <span>{prediction}</span>
      </div>
      <div className="h-2 rounded bg-gray-200 overflow-hidden mb-4">
        <div
          className={`${barColor} h-2 transition-all duration-1000`}
          style={{ width: `${barWidth}%` }}
        ></div>
      </div>
      <ul className="space-y-1 text-sm">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <span className={`w-2 h-2 rounded-full mr-2 ${item.color}`}></span>
            <span className="text-gray-600 flex-1">{item.label}</span>
            <span className="font-medium text-gray-800">{item.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SummaryCard;

