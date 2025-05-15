import Header from "../Header";
import Sidebar from "../Sidebar";
import ChargebackPrediction from "./ChargebackPrediction";
import ComplaintPrediction from "./ComplaintPrediction";
import FroudAgentRisk from "./FroudAgentRisk";
import FroudCustomerRisk from "./FroudCustomerRisk";
import HighRiskTxn from "./HighRiskTxn";
import RealTimeTxn from "./RealTimeTxn";
import RiskMonitoring from "./RiskMonitoring";
import RiskProfileTrends from "./RiskProfileTrends";

const FraudDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-base-content">
      <Header />
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 overflow-y-auto">
          <div className="p-6 bg-gray-50 space-y-6">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl font-semibold">
                  Enhanced Risk Intelligence Dashboard
                </h1>
                <p className="text-sm text-gray-500">
                  Comprehensive view of agent and customer profiling with
                  predictive analytics
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

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="p-4 bg-white rounded-xl shadow border">
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-500">Overall Risk Score</p>
                  <span className="text-xs text-red-600 bg-red-100 p-1 rounded-lg">
                    Critical
                  </span>
                </div>
                <h2 className="text-2xl font-semibold">
                  78/100 <span className="text-xs text-red-500">↑ 12%</span>
                </h2>
                <p className="text-xs text-gray-400">Updated in real-time</p>
              </div>
              <div className="p-4 bg-white rounded-xl shadow border">
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-500">Predicted Chargebacks</p>
                  <span className="text-xs text-yellow-600 bg-yellow-100 p-1 rounded-lg">
                    Medium
                  </span>
                </div>
                <h2 className="text-2xl font-semibold">
                  24% <span className="text-xs text-green-500">↑ 3%</span>
                </h2>
                <p className="text-xs text-gray-400">
                  Projected for next 30 days
                </p>
              </div>
              <div className="p-4 bg-white rounded-xl shadow border">
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-500">Dynamic Risk Profiles</p>
                  <span className="text-xs text-orange-600 bg-orange-100 p-1 rounded-lg">
                    Attention
                  </span>
                </div>

                <h2 className="text-2xl font-semibold">
                  47
                  <span className="text-xs text-red-500">↑ 18%</span>
                </h2>
                <p className="text-xs text-gray-400">Updated profiles today</p>
              </div>
              <div className="p-4 bg-white rounded-xl shadow border">
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-500">Complaint Prediction</p>
                  <span className="text-xs text-green-600 bg-green-100 p-1 rounded-lg">
                    Law
                  </span>
                </div>
                <h2 className="text-2xl font-semibold">
                  8% <span className="text-xs text-green-500">↓ 22%</span>
                </h2>
                <p className="text-xs text-gray-400">
                  Projected for next 7 days
                </p>
              </div>
            </div>
          </div>

          <div className="p-6">
            <RiskMonitoring />
            <div className="grid grid-cols-2 gap-6 mt-6">
              <FroudAgentRisk />
              <FroudCustomerRisk />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm p-6">
            <ChargebackPrediction />
            <ComplaintPrediction />
            <RiskProfileTrends />
          </div>
          <div className="p-6">
            <RealTimeTxn />
            <HighRiskTxn />
            <div className="flex justify-between text-gray-500 text-sm">
              <p>Â© 2025 RiskGuard. All rights reserved.</p>
              <p>Dashboard last updated: April 23, 2025 - 14:32</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
export default FraudDashboard;
