import Header from "../Header";
import Sidebar from "../Sidebar";
import ActionableInsights from "./ActionableInsights";
import ChargebackCategories from "./ChargebackCategories";
import ChargebackPrevention from "./ChargebackPrevention";
import ChargebackTrendPrediction from "./ChargebackTrendPrediction";
import HighRiskCusProfiles from "./HighRiskCusProfiles";
import HighRiskTransactions from "./HighRiskTransactions";

const ChargebackDashobard = () => {
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
                  Predictive Chargeback Analytics
                </h1>
                <p className="text-sm text-gray-500">
                  Advanced risk assessment and actionable insights
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
                  <p className="text-sm text-gray-500">Predicted Chargebacks</p>
                  <span className="text-xs text-red-600">High</span>
                </div>
                <h2 className="text-2xl font-semibold">
                  124 <span className="text-xs text-red-500">↑ 18%</span>
                </h2>
                <p className="text-xs text-gray-400">
                  Projected for next 30 days
                </p>
              </div>
              <div className="p-4 bg-white rounded-xl shadow border">
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-500">Chargeback Rate</p>
                  <span className="text-xs text-yellow-600">Medium</span>
                </div>
                <h2 className="text-2xl font-semibold">
                  3.2% <span className="text-xs text-red-500">↑ 0.8%</span>
                </h2>
                <p className="text-xs text-gray-400">
                  Compared to last month (2.4%)
                </p>
              </div>
              <div className="p-4 bg-white rounded-xl shadow border">
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-500">Financial Impact</p>
                  <span className="text-xs text-red-600">Critical</span>
                </div>

                <h2 className="text-2xl font-semibold">
                  $42,180 <span className="text-xs text-red-500">↑ 24%</span>
                </h2>
                <p className="text-xs text-gray-400">
                  Estimated loss for next 30 days
                </p>
              </div>
              <div className="p-4 bg-white rounded-xl shadow border">
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-500">
                    Prevention Opportunity
                  </p>
                  <span className="text-xs text-red-600">High</span>
                </div>
                <h2 className="text-2xl font-semibold">
                  $182,400 <span className="text-xs text-green-500">↓ 63%</span>
                </h2>
                <p className="text-xs text-gray-400">
                  Potential savings with intervention
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
            <ChargebackTrendPrediction />
            <ChargebackCategories />
            <HighRiskCusProfiles />
            <ActionableInsights />
          </div>

          <div className="p-6">
            <ChargebackPrevention />
            <HighRiskTransactions />
          </div>
        </main>
      </div>
    </div>
  );
};
export default ChargebackDashobard;
