import React from "react";

const riskFactors = [
  {
    name: "Transaction Velocity",
    impact: "High",
    color: "bg-red-500",
    level: "80%",
  },
  {
    name: "Geographic Risk",
    impact: "Medium",
    color: "bg-yellow-400",
    level: "60%",
  },
  {
    name: "Purchase Behavior",
    impact: "Medium",
    color: "bg-yellow-400",
    level: "60%",
  },
  {
    name: "Device Reputation",
    impact: "High",
    color: "bg-red-500",
    level: "75%",
  },
  {
    name: "Customer History",
    impact: "Low",
    color: "bg-green-400",
    level: "30%",
  },
];

const RiskFactorsPanel = () => {
  return (
    <div className="bg-white rounded-lg shadow p-4 w-full mr-4">
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-semibold">Key Risk Factors</h2>
        <a href="#" className="text-sm text-blue-600 hover:underline">
          Configure
        </a>
      </div>
      <div className="space-y-4">
        {riskFactors.map((factor, i) => (
          <div key={i}>
            <div className="flex justify-between text-sm">
              <span>{factor.name}</span>
              <span className="text-xs text-gray-600">
                {factor.impact} Impact
              </span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded">
              <div
                className={`h-2 rounded ${factor.color}`}
                style={{ width: factor.level }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RiskFactorsPanel;
