import React from "react";
import { useNavigate } from "react-router-dom";

const HighRiskTransactions = () => {
  const navigate = useNavigate();
  const transactions = [
    {
      id: "#TX-8294",
      customer: "John Doe",
      initials: "JD",
      agent: "Michael Johnson",
      amount: "$2,450.00",
      date: "Apr 23, 2025",
      score: "92%",
      status: "Flagged",
    },
    {
      id: "#TX-7521",
      customer: "Alice Smith",
      initials: "AS",
      agent: "Sarah Williams",
      amount: "$1,875.50",
      date: "Apr 22, 2025",
      score: "88%",
      status: "Under Review",
    },
    {
      id: "#TX-6982",
      customer: "Robert Brown",
      initials: "RB",
      agent: "David Chen",
      amount: "$3,210.25",
      date: "Apr 21, 2025",
      score: "86%",
      status: "Monitoring",
    },
  ];

  const statusStyle = {
    Flagged: "bg-red-100 text-red-700",
    "Under Review": "bg-yellow-100 text-yellow-700",
    Monitoring: "bg-blue-100 text-blue-700",
  };

  return (
    <div className="bg-white rounded-xl shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">
          Recent High-Risk Transactions
        </h3>
        <a href="#" className="text-sm text-blue-600 hover:underline">
          View All
        </a>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead>
            <tr className="text-gray-600">
              <th className="p-2">Transaction ID</th>
              <th className="p-2">Customer</th>
              <th className="p-2">Agent</th>
              <th className="p-2">Amount</th>
              <th className="p-2">Date</th>
              <th className="p-2">Risk Score</th>
              <th className="p-2">Status</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx, index) => (
              <tr key={index} className="border-t">
                <td className="p-2 font-medium text-blue-600">{tx.id}</td>
                <td
                  onClick={() => navigate("/agent-profile-info")}
                  className="p-2 flex items-center space-x-2 cursor-pointer"
                >
                  <span className="w-7 h-7 flex items-center justify-center bg-gray-200 rounded-full text-xs font-semibold">
                    {tx.initials}
                  </span>
                  <span>{tx.customer}</span>
                </td>
                <td className="p-2">{tx.agent}</td>
                <td className="p-2">{tx.amount}</td>
                <td className="p-2">{tx.date}</td>
                <td className="p-2 text-red-500 font-medium">{tx.score}</td>
                <td className="p-2">
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      statusStyle[tx.status]
                    }`}
                  >
                    {tx.status}
                  </span>
                </td>
                <td className="p-2">
                  <a href="#" className="text-blue-600 hover:underline">
                    Review
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HighRiskTransactions;
