import React from "react";
import Sidebar from "../Sidebar";
import Header from "../Header";
import SummaryCard from "../dashboard/SummaryCard";
import RiskScoreTrends from "../dashboard/RiskScoreTrends";
import HighRiskTransactions from "../dashboard/HighRiskTransactions";
import CustomerRiskProfiles from "./CustomerRiskProfiles";
import AgentRiskProfiles from "./AgentRiskProfiles";
import RiskSummaryCards from "./RiskSummaryCards";
import { Download, RefreshCcw } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-base-content">
      <Header />

      <div className="flex min-h-screen">
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          {/* Top Controls */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                Risk Intelligence Dashboard
              </h1>
              <p className="text-gray-600">
                Overview of agent and customer profiles with predictive
                analytics
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center bg-white border rounded-md px-3 py-2">
                <span className="text-gray-600 mr-2">Period:</span>
                <span className="font-medium">Apr 1 - Apr 23, 2025</span>
                <i className="fa-solid fa-calendar-days ml-2 text-gray-500"></i>
              </div>

              <button className="p-2 hover:bg-gray-200 rounded">
                <Download size={18} />
              </button>
              <button className="p-2 hover:bg-gray-200 rounded">
                <RefreshCcw size={18} />
              </button>
            </div>
          </div>

          <RiskSummaryCards />
          <div className="grid grid-cols-2 gap-6 mb-6">
            <AgentRiskProfiles />
            <CustomerRiskProfiles />
          </div>
          <div className="bg-gray-50 min-h-screen space-y-6">
            <div className="flex gap-6">
              <SummaryCard
                title="Chargeback Prediction"
                prediction="124 Chargebacks"
                value="200"
                barColor="bg-red-500"
                items={[
                  {
                    label: "Card Not Present",
                    value: "72 (58%)",
                    color: "bg-red-500",
                  },
                  {
                    label: "Product Not Received",
                    value: "32 (26%)",
                    color: "bg-purple-500",
                  },
                  {
                    label: "Product Not as Described",
                    value: "20 (16%)",
                    color: "bg-green-500",
                  },
                ]}
              />
              <SummaryCard
                title="Complaint Prediction"
                prediction="87 Complaints"
                value="200"
                barColor="bg-yellow-400"
                items={[
                  {
                    label: "Customer Service",
                    value: "42 (48%)",
                    color: "bg-orange-400",
                  },
                  {
                    label: "Product Quality",
                    value: "28 (32%)",
                    color: "bg-purple-500",
                  },
                  {
                    label: "Billing Issues",
                    value: "17 (20%)",
                    color: "bg-yellow-500",
                  },
                ]}
              />
              <RiskScoreTrends />
            </div>
            <HighRiskTransactions />
          </div>
        </main>
      </div>
    </div>
  );
};
export default Dashboard;
