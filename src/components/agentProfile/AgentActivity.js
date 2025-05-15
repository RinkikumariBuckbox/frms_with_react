import React from "react";

const activityData = [
  {
    iconColor: "red-500",
    title: "Manual Override Applied",
    desc: "Agent bypassed fraud check for transaction #TX-8294",
    flag: "Risk flag: Transaction amount ($2,450) exceeds customer's typical spending pattern by 340%",
    flagColor: "bg-red-100 text-red-800",
    time: "Today, 14:32",
  },
  {
    iconColor: "yellow-500",
    title: "Multiple Transactions Processed",
    desc: "12 transactions processed in under 5 minutes",
    flag: "Unusual velocity detected: Average processing time 24 seconds (system average: 3.2 minutes)",
    flagColor: "bg-yellow-100 text-yellow-800",
    time: "Today, 11:47",
  },
  {
    iconColor: "blue-500",
    title: "After-Hours Activity",
    desc: "Accessed customer records outside business hours",
    flag: "Accessed 7 high-value customer profiles with no associated transactions",
    flagColor: "bg-blue-100 text-blue-800",
    time: "Yesterday, 22:15",
  },
  {
    iconColor: "red-400",
    title: "Chargeback Received",
    desc: "Transaction #TX-725 received chargeback claim",
    flag: "Customer claims transaction was unauthorized. Agent processed with incomplete verification.",
    flagColor: "bg-red-100 text-red-800",
    time: "Apr 21, 2025",
  },
];

export default function AgentActivity() {
  return (
    <div className="p-4 space-y-4 bg-white-50 text-sm rounded-xl shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold">Agent Activity Timeline</h2>
        <select className="border rounded px-2 py-1 text-sm">
          <option>Michael Johnson (High Risk)</option>
        </select>
      </div>
      <div className="relative pl-6 border-l border-gray-200 space-y-6">
        {activityData.map((item, idx) => (
          <div key={idx} className="relative">
            <div
              className={`w-3 h-3 bg-${item.iconColor} left-[-30px] rounded-full absolute top-1`}
            ></div>
            <div>
              <p className="font-medium text-gray-800">{item.title}</p>
              <p className="text-gray-600">{item.desc}</p>
              <div className={`mt-2 p-2 rounded ${item.flagColor}`}>
                {item.flag}
              </div>
              <p className="text-gray-400 text-xs mt-1">{item.time}</p>
            </div>
          </div>
        ))}
        <div className="relative">
          <div className="w-3 h-3 bg-gray-400 left-[-30px] rounded-full absolute top-1 "></div>
          <div>
            <p className="text-blue-600 font-medium cursor-pointer">
              View More Activity
            </p>
            <p className="text-xs text-gray-500">
              See complete agent activity history
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
