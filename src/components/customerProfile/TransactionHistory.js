// TransactionHistory.jsx
import React from "react";
import { Search, Filter } from "lucide-react";
import { useNavigate } from "react-router-dom";

const transactions = [
  {
    id: "#TX-8294",
    date: "Apr 23, 2025",
    amount: "$2,450.00",
    method: "Visa •••• 4821",
    agent: {
      name: "Michael Johnson",
      avatar:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg",
    },
    risk: 92,
    status: "Flagged",
  },
  {
    id: "#TX-7521",
    date: "Apr 18, 2025",
    amount: "$1,875.50",
    method: "Mastercard •••• 2471",
    agent: {
      name: "Sarah Williams",
      avatar:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg",
    },
    risk: 88,
    status: "Under Review",
  },
  {
    id: "#TX-6982",
    date: "Apr 12, 2025",
    amount: "$895.25",
    method: "PayPal",
    agent: {
      name: "David Chen",
      avatar:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg",
    },
    risk: 76,
    status: "Monitoring",
  },
  {
    id: "#TX-6124",
    date: "Apr 5, 2025",
    amount: "$320.00",
    method: "Visa •••• 4821",
    agent: {
      name: "Emily Rodriguez",
      avatar:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-7.jpg",
    },
    risk: 32,
    status: "Approved",
  },
];

const getStatusStyle = (status) => {
  switch (status) {
    case "Flagged":
      return "bg-red-100 text-red-700";
    case "Under Review":
      return "bg-yellow-100 text-yellow-800";
    case "Monitoring":
      return "bg-blue-100 text-blue-700";
    case "Approved":
      return "bg-green-100 text-green-700";
    default:
      return "bg-gray-100 text-gray-600";
  }
};

const getRiskColor = (risk) => {
  if (risk >= 85) return "bg-red-500";
  if (risk >= 70) return "bg-yellow-500";
  return "bg-green-500";
};

const TransactionHistory = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow rounded-lg p-4 mb-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Transaction History</h2>
        <div className="flex gap-2 items-center">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search transactions..."
              className="pl-8 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="flex items-center gap-1 border px-3 py-1.5 rounded-md text-sm text-gray-700 hover:bg-gray-100">
            <Filter className="h-4 w-4" /> Filter
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead>
            <tr className="text-gray-500 border-b">
              <th className="py-2 px-4">Transaction ID</th>
              <th className="py-2 px-4">Date</th>
              <th className="py-2 px-4">Amount</th>
              <th className="py-2 px-4">Payment Method</th>
              <th className="py-2 px-4">Agent</th>
              <th className="py-2 px-4">Risk Score</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx, i) => (
              <tr key={i} className="border-b">
                <td className="py-2 px-4 text-blue-600 font-medium">{tx.id}</td>
                <td className="py-2 px-4">{tx.date}</td>
                <td className="py-2 px-4 font-semibold">{tx.amount}</td>
                <td className="py-2 px-4">{tx.method}</td>
                <td
                  onClick={() => navigate("/agent-profile-info")}
                  className="py-2 px-4 flex items-center gap-2 cursor-pointer"
                >
                  <img
                    src={tx.agent.avatar}
                    alt={tx.agent.name}
                    className="w-6 h-6 rounded-full"
                  />
                  {tx.agent.name}
                </td>
                <td className="py-2 px-4">
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-sm font-medium ${
                        getRiskColor(tx.risk) === "bg-red-500"
                          ? "text-red-600"
                          : getRiskColor(tx.risk) === "bg-yellow-500"
                          ? "text-yellow-600"
                          : "text-green-600"
                      }`}
                    >
                      {tx.risk}%
                    </span>
                    <div className="w-20 h-2 bg-gray-200 rounded-full">
                      <div
                        className={`h-2 rounded-full ${getRiskColor(tx.risk)}`}
                        style={{ width: `${tx.risk}%` }}
                      ></div>
                    </div>
                  </div>
                </td>
                <td className="py-2 px-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusStyle(
                      tx.status
                    )}`}
                  >
                    {tx.status}
                  </span>
                </td>
                <td className="py-2 px-4 text-blue-600 font-medium cursor-pointer">
                  Review
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center text-sm text-gray-600 mt-4">
        <div>Showing 4 of 24 transactions</div>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1 border rounded-md hover:bg-gray-100 ">
            Previous
          </button>
          <button className="px-3 py-1 rounded-md bg-blue-100 text-blue-700">
            1
          </button>
          <button className="px-3 py-1 border rounded-md hover:bg-gray-100">
            2
          </button>
          <button className="px-3 py-1 border rounded-md hover:bg-gray-100">
            3
          </button>
          <button className="px-3 py-1 border rounded-md hover:bg-gray-100">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionHistory;
