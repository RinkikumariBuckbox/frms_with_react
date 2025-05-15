import { useState } from "react";
import {
  Check,
  Clock,
  BadgeCheck,
  Circle,
  UserCheck,
  FileCheck,
} from "lucide-react";
import Header from "../Header";
import Sidebar from "../Sidebar";

export default function AgentProfileInfo() {
  const [agent] = useState({
    name: "Michael Johnson",
    code: "AG-7824",
    status: "Active",
    phone: "+91 98765 43210",
    email: "michael.johnson@example.com",
  });

  return (
    <div className="min-h-screen bg-gray-50 text-base-content">
      <Header />
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 overflow-y-auto">
          <div className="p-6 bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="bg-white p-4 rounded-xl flex justify-between items-center shadow-sm">
              <div className="flex items-center gap-4">
                <img
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg"
                  alt="Agent"
                  className="w-14 h-14 rounded-full"
                />
                <div>
                  <h2 className="text-xl font-semibold">{agent.name}</h2>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-md">
                      {agent.code}
                    </span>
                    <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-md">
                      {agent.status}
                    </span>
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    📞 {agent.phone} • ✉️ {agent.email}
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="border px-4 py-2 rounded-md hover:bg-gray-100">
                  Edit Profile
                </button>
                <button className="border border-red-300 text-red-600 px-4 py-2 rounded-md hover:bg-red-50">
                  Deactivate
                </button>
              </div>
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              {/* Verification Status */}
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <h3 className="font-semibold text-lg mb-4">
                  Verification Status
                </h3>
                {[
                  { label: "PAN Card", status: "Verified" },
                  { label: "Aadhaar Card", status: "Verified" },
                  { label: "GST Certificate", status: "Pending" },
                  { label: "Live Photo", status: "Verified" },
                ].map((item) => (
                  <div className="flex justify-between py-1" key={item.label}>
                    <span>{item.label}</span>
                    <span
                      className={`text-xs font-medium px-2 py-0.5 rounded ${
                        item.status === "Verified"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>

              {/* Performance Metrics */}
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <h3 className="font-semibold text-lg mb-4">
                  Performance Metrics
                </h3>
                <div className="mb-3">
                  <p>
                    Success Rate{" "}
                    <span className="float-right font-medium">92%</span>
                  </p>
                  <div className="w-full h-2 bg-gray-200 rounded-full">
                    <div className="h-full bg-green-500 w-[92%] rounded-full" />
                  </div>
                </div>
                <div className="mb-3">
                  <p>
                    Customer Satisfaction{" "}
                    <span className="float-right font-medium">4.8/5</span>
                  </p>
                  <div className="w-full h-2 bg-gray-200 rounded-full">
                    <div className="h-full bg-blue-500 w-[96%] rounded-full" />
                  </div>
                </div>
                <div>
                  <p>
                    Response Time{" "}
                    <span className="float-right font-medium">15 mins</span>
                  </p>
                  <div className="w-full h-2 bg-gray-200 rounded-full">
                    <div className="h-full bg-yellow-500 w-[80%] rounded-full" />
                  </div>
                </div>
              </div>

              {/* Risk Assessment */}
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <h3 className="font-semibold text-lg mb-4">Risk Assessment</h3>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-600">Overall Risk Score</p>
                  <p className="text-lg text-green-600 font-semibold">Low</p>
                </div>
                <ul className="mt-3 text-sm text-gray-600 space-y-1">
                  <li>✔️ AML Check Passed</li>
                  <li>✔️ PEP Status Clear</li>
                  <li>✔️ Credit Score: 750</li>
                </ul>
              </div>
            </div>

            {/* Lower Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {/* Recent Activity */}
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <h3 className="font-semibold text-lg mb-4">Recent Activity</h3>
                {[
                  {
                    title: "Customer Onboarding",
                    desc: "Successfully onboarded 3 customers",
                    time: "2 hours ago",
                    icon: <UserCheck className="w-5 h-5 text-green-500" />,
                  },
                  {
                    title: "Transaction Processing",
                    desc: "5 transactions completed",
                    time: "4 hours ago",
                    icon: <FileCheck className="w-5 h-5 text-blue-500" />,
                  },
                  {
                    title: "Location Update",
                    desc: "Area coverage updated",
                    time: "Yesterday",
                    icon: <Circle className="w-5 h-5 text-purple-500" />,
                  },
                ].map(({ title, desc, time, icon }) => (
                  <div
                    className="flex items-center gap-3 py-2 border-b last:border-b-0"
                    key={title}
                  >
                    {icon}
                    <div className="flex-grow">
                      <p className="font-medium text-sm">{title}</p>
                      <p className="text-xs text-gray-500">{desc}</p>
                    </div>
                    <span className="text-xs text-gray-400">{time}</span>
                  </div>
                ))}
              </div>

              {/* Compliance Status */}
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <h3 className="font-semibold text-lg mb-4">
                  Compliance Status
                </h3>
                <div className="space-y-2">
                  <div className="bg-green-50 p-3 rounded-md text-green-800">
                    KYC Status: All documents verified
                  </div>
                  <div className="bg-blue-50 p-3 rounded-md text-blue-800">
                    Training: Completed (Score: 95%)
                  </div>
                  <div className="bg-purple-50 p-3 rounded-md text-purple-800">
                    Audit Status: Last audit clear
                  </div>
                  <div className="bg-yellow-50 p-3 rounded-md text-yellow-800">
                    License: Valid till Dec 2025
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
