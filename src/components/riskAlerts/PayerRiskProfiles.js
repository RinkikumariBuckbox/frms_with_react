// PayerRiskProfiles.jsx
import React from "react";
import { ArrowDown, ArrowUp, Calendar, RefreshCw } from "lucide-react";
import Sidebar from "../Sidebar";
import Header from "../Header";
import RiskFactors from "./RiskFactors";
import RiskProfileTable from "./RiskProfileTable";

const PayerRiskProfiles = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-base-content">
      <Header />

      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="space-y-6">
            {/* Top Metrics */}
            <div className="flex justify-between flex-wrap items-center gap-4">
              <div>
                <h2 className="text-xl font-semibold">Payer Risk Profiles</h2>
                <p className="text-sm text-gray-500">
                  Dynamic risk scoring based on transaction history and behavior
                  patterns
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-gray-600" />
                <span className="font-medium text-sm">
                  Period: Apr 1 - Apr 23, 2025
                </span>
                <RefreshCw className="ml-2 w-4 h-4 text-gray-500 cursor-pointer" />
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 bg-white shadow rounded">
                <p className="text-sm text-gray-600">Average Risk Score</p>
                <div className="text-2xl font-semibold">78/100</div>
                <p className="text-sm text-red-500 flex items-center gap-1">
                  {" "}
                  <ArrowDown size={14} /> 12%
                </p>
              </div>
              <div className="p-4 bg-white shadow rounded">
                <p className="text-sm text-gray-600">High Risk Payers</p>
                <div className="text-2xl font-semibold">42</div>
                <p className="text-sm text-red-500 flex items-center gap-1">
                  {" "}
                  <ArrowDown size={14} /> 8%
                </p>
              </div>
              <div className="p-4 bg-white shadow rounded">
                <p className="text-sm text-gray-600">Profiles Updated</p>
                <div className="text-2xl font-semibold">247</div>
                <p className="text-sm text-green-500 flex items-center gap-1">
                  {" "}
                  <ArrowUp size={14} /> 24%
                </p>
              </div>
              <div className="p-4 bg-white shadow rounded">
                <p className="text-sm text-gray-600">Transaction Approvals</p>
                <div className="text-2xl font-semibold">89%</div>
                <p className="text-sm text-red-500 flex items-center gap-1">
                  {" "}
                  <ArrowDown size={14} /> 3%
                </p>
              </div>
            </div>

            <RiskProfileTable />
          </div>
          <RiskFactors />
        </main>
      </div>
    </div>
  );
};

export default PayerRiskProfiles;
