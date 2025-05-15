import React from "react";
import { Plus } from "lucide-react";

const rules = [
  {
    name: "Transaction Limit",
    condition: "If transaction amount > $1,000",
    action: "Require additional verification",
    impact: "High",
    status: "Active",
  },
  {
    name: "Location Change",
    condition: "If transaction location differs from previous",
    action: "Flag for manual review",
    impact: "Medium",
    status: "Active",
  },
  {
    name: "Velocity Check",
    condition: "If > 3 transactions in 24 hours",
    action: "Temporarily block new transactions",
    impact: "High",
    status: "Active",
  },
  {
    name: "Card Verification",
    condition: "If new payment method added",
    action: "Require CVV verification",
    impact: "Low",
    status: "Inactive",
  },
];

const impactStyles = {
  High: "bg-red-100 text-red-800",
  Medium: "bg-yellow-100 text-yellow-800",
  Low: "bg-green-100 text-green-800",
};

const ActiveRiskRules = () => {
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Active Risk Rules</h2>

        <button className="flex items-center gap-2 bg-blue-600 rounded p-2 text-white">
          <Plus className="h-4 w-4" /> Add Rule
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead>
            <tr className="text-gray-500 border-b">
              <th className="py-2 px-4">Rule Name</th>
              <th className="py-2 px-4">Condition</th>
              <th className="py-2 px-4">Action</th>
              <th className="py-2 px-4">Risk Impact</th>
              <th className="py-2 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {rules.map((rule, index) => (
              <tr key={index} className="border-b">
                <td className="py-2 px-4 font-medium">{rule.name}</td>
                <td className="py-2 px-4">{rule.condition}</td>
                <td className="py-2 px-4">{rule.action}</td>
                <td className="py-2 px-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      impactStyles[rule.impact]
                    }`}
                  >
                    {rule.impact}
                  </span>
                </td>
                <td className="py-2 px-4">
                  <span
                    className={`text-sm font-medium ${
                      rule.status === "Active"
                        ? "text-green-600"
                        : "text-gray-400"
                    }`}
                  >
                    {rule.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActiveRiskRules;
