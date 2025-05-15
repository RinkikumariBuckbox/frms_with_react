import Header from "../Header";
import Sidebar from "../Sidebar";
import RiskFactorsPanel from "./RiskFactorsPanel";
import RiskScoringThresholds from "./RiskScoringThresholds";
import TransactionDetailCard from "./TransactionDetailCard";
import TxnCard from "./TxnCard";
import TxnScoring from "./TxnScoring";
import CusRiskProfileTrends from "./CusRiskProfileTrends";
import ApprovalOptimization from "./ApprovalOptimization";

const TxnApprovalAss = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-base-content">
      <Header />

      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 overflow-y-auto">
          <div className="p-6 bg-gray-50 min-h-screen space-y-6">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl font-semibold">
                  Transaction Approval Assessment
                </h1>
                <p className="text-sm text-gray-500">
                  Real-time scoring for transaction approvals and risk analysis
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

            <TxnCard />
            <TxnScoring />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <RiskFactorsPanel />
              <RiskScoringThresholds />
            </div>

            <TransactionDetailCard />

            <div className=" grid md:grid-cols-2 gap-6">
              <CusRiskProfileTrends />
              <ApprovalOptimization />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TxnApprovalAss;
