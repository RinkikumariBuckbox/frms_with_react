import { Bell, Eye, SquarePen } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar";
import Header from "../Header";

const AgentProfileList = () => {
  const navigate = useNavigate();
  const transactions = [
    {
      id: "AG-7824",
      txn: "246",
      initials: "JD",
      name: "Michael Johnson",
      flagged: "12 (4.9%)",
      rate: "3.2%",
      score: "82",
      status: "High Risk",
      img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg",
      email: "michael.johnson@example.com",
    },
    {
      id: "AG-4521",
      txn: "189",
      initials: "AS",
      name: "Sarah Williams",
      flagged: "7 (3.7%)",
      rate: "2.1%",
      score: "56",
      status: "Medium Risk",
      img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg",
      email: "sarah.williams@example.com",
    },
    {
      id: "AG-3348",
      txn: "215",
      initials: "RB",
      name: "David Chen",
      flagged: "2 (0.9%)",
      rate: "0.5%",
      score: "24",
      status: "Low Risk",
      img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg",
      email: "david.chen@example.com",
    },
    {
      id: "AG-4521",
      txn: "189",
      initials: "AS",
      name: "Emily Rodriguez",
      flagged: "7 (3.7%)",
      rate: "2.1%",
      score: "48",
      status: "Medium Risk",
      img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-7.jpg",
      email: "emily.rodriguez@example.com",
    },
    {
      id: "AG-3348",
      txn: "215",
      initials: "RB",
      name: "James Wilson",
      flagged: "2 (0.9%)",
      rate: "0.5%",
      score: "79",
      status: "High Risk",
      img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg",
      email: "james.wilson@example.com",
    },
  ];

  const statusStyle = {
    "High Risk": "bg-red-100 text-red-700",
    "Medium Risk": "bg-yellow-100 text-yellow-700",
    "Low Risk": "bg-green-100 text-green-700",
  };

  const statusColor = {
    "High Risk": "bg-red-700 ",
    "Medium Risk": "bg-yellow-700",
    "Low Risk": "bg-green-700",
  };

  const getRiskColor = (risk) => {
    if (risk >= 80) return "bg-red-500";
    if (risk >= 50) return "bg-yellow-500";
    return "bg-green-500";
  };

  return (
    <div className="bg-white rounded-xl shadow p-4 mb-4">
      <div className="mb-4 text-gray-400 text-sm">
        <h3 className="text-lg font-semibold text-gray-800">Agent Profiles</h3>
        <p>Showing all agents with their risk scores and performance metrics</p>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead>
            <tr className="text-gray-600">
              <th className="p-2">Agent</th>
              <th className="p-2">ID</th>
              <th className="p-2">Risk Score</th>
              <th className="p-2">Transactions</th>
              <th className="p-2">Flagged</th>
              <th className="p-2">Chargeback Rate</th>
              <th className="p-2">Status</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx, index) => (
              <tr key={index} className="border-t">
                <td
                  onClick={() => navigate("/agent-profile-info")}
                  className="p-2 flex items-center space-x-2 cursor-pointer"
                >
                  {tx.img ? (
                    <div className="relative w-7 h-7 ">
                      <img
                        src={tx.img}
                        alt={tx.name}
                        className="w-7 h-7 rounded-full object-cover"
                      />
                      <span
                        className={`absolute bottom-0 right-0 w-2 h-2 rounded-full border-2 border-white ${
                          statusColor[tx.status]
                        }`}
                      ></span>
                    </div>
                  ) : (
                    <span className="w-7 h-7 flex items-center justify-center bg-gray-200 rounded-full text-xs font-semibold">
                      {tx.initials}
                    </span>
                  )}

                  <div className="flex flex-col">
                    <span className="text-[13px] font-medium">{tx.name}</span>
                    <span className="text-xs text-gray-500">{tx.email}</span>
                  </div>
                </td>
                <td className="p-2 text-[13px]">{tx.id}</td>
                <td className="py-2 px-4">
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-sm font-medium ${
                        getRiskColor(tx.score) === "bg-red-500"
                          ? "text-red-600"
                          : getRiskColor(tx.score) === "bg-yellow-500"
                          ? "text-yellow-600"
                          : "text-green-600"
                      }`}
                    >
                      {tx.score}%
                    </span>
                    <div className="w-20 h-2 bg-gray-200 rounded-full">
                      <div
                        className={`h-2 rounded-full ${getRiskColor(tx.score)}`}
                        style={{ width: `${tx.score}%` }}
                      ></div>
                    </div>
                  </div>
                </td>
                <td className="p-2">{tx.txn}</td>
                <td className="p-2">{tx.flagged}</td>
                <td className="p-2">{tx.rate}</td>
                <td className="p-2">
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      statusStyle[tx.status]
                    }`}
                  >
                    {tx.status}
                  </span>
                </td>
                <td className="p-2 flex">
                  <Eye size={14} className="cursor-pointer mr-1" />
                  <SquarePen size={14} className="cursor-pointer mr-1" />
                  <Bell size={14} className="cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AgentProfileList;
