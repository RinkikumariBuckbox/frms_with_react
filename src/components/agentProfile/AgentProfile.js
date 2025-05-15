import React from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import AgentProfileList from "./AgentProfileList";
import RiskChart from "./RiskChart";
import AgentActivity from "./AgentActivity";
import AgentManageTools from "./AgentManageTools";

const AgentProfile = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-base-content">
      <Header />
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 overflow-y-auto">
          <div className="p-6 bg-gray-50 min-h-screen space-y-6">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl font-semibold">Agent Profiles</h1>
                <p className="text-sm text-gray-500">
                  View and manage agent performance and risk metrics
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Period:</span>
                <span className="font-medium">Apr 1 - Apr 23, 2025</span>
                <button className="ml-2 text-gray-500 hover:text-black">
                  📥
                </button>
                <button className="text-gray-500 hover:text-black">📄</button>
              </div>
            </div>

            {/* Stats Summary */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="p-4 bg-white rounded-xl shadow border">
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-500">Total Agents</p>
                  <span className="text-xs text-blue-600">Active</span>
                </div>
                <h2 className="text-2xl font-semibold text-green-600">
                  42 <span className="text-xs text-green-500">↑ 4</span>
                </h2>
                <p className="text-xs text-gray-400">Since last month</p>
              </div>
              <div className="p-4 bg-white rounded-xl shadow border">
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-500">High-Risk Agents</p>
                  <span className="text-xs text-red-500">Alert</span>
                </div>
                <h2 className="text-2xl font-semibold text-red-600">
                  8 <span className="text-xs text-red-500">↑ 3</span>
                </h2>
                <p className="text-xs text-gray-400">Compared to last month</p>
              </div>
              <div className="p-4 bg-white rounded-xl shadow border">
                <p className="text-sm text-gray-500">Avg. Transaction Value</p>
                <h2 className="text-2xl font-semibold">
                  $2,451 <span className="text-xs text-green-500">↑ 5%</span>
                </h2>
                <p className="text-xs text-gray-400">Per agent this month</p>
              </div>
              <div className="p-4 bg-white rounded-xl shadow border">
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-500">Flagged Transactions</p>
                  <span className="text-xs text-yellow-500">Attention</span>
                </div>
                <h2 className="text-2xl font-semibold text-red-600">
                  142 <span className="text-xs text-red-500">↓ 18%</span>
                </h2>
                <p className="text-xs text-gray-400">
                  Across all agents this month
                </p>
              </div>
            </div>

            {/* Tools Section */}
            <AgentManageTools />
            <div>
              <AgentProfileList />
              <RiskChart />
              <AgentActivity />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AgentProfile;
