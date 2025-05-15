import Header from "../Header";
import Sidebar from "../Sidebar";
import ComplaintAnalysis from "./ComplaintAnalysis";
import ComplaintCategories from "./ComplaintCategories";
import RiskImpact from "./RiskImpact";
import SentimentAnalysis from "./SentimentAnalysis";

const ComplaintDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-base-content">
      <Header />

      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 overflow-y-auto">
          <div className="p-6 bg-gray-50 space-y-6">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl font-semibold">Complaint Analysis</h1>
                <p className="text-sm text-gray-500">
                  Identify and analyze customer complaints to mitigate risks
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
                  <p className="text-sm text-gray-500">Total Complaints</p>
                  <span className="text-xs text-yellow-600 bg-yellow-100 p-1 rounded-lg">
                    Medium
                  </span>
                </div>
                <h2 className="text-2xl font-semibold">
                  87 <span className="text-xs text-red-500">↑ 8%</span>
                </h2>
                <p className="text-xs text-gray-400">Compared to last month</p>
              </div>
              <div className="p-4 bg-white rounded-xl shadow border">
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-500">
                    Complaint-to-Transaction Ratio
                  </p>
                  <span className="text-xs text-green-600 bg-green-100 p-1 rounded-lg">
                    Low
                  </span>
                </div>
                <h2 className="text-2xl font-semibold">
                  2.3% <span className="text-xs text-green-500">↑ 0.5%</span>
                </h2>
                <p className="text-xs text-gray-400">Industry avg: 3.1%</p>
              </div>
              <div className="p-4 bg-white rounded-xl shadow border">
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-500">Avg Resolution Time</p>
                  <span className="text-xs text-orange-600 bg-orange-100 p-1 rounded-lg">
                    Attention
                  </span>
                </div>

                <h2 className="text-2xl font-semibold">
                  3.2 days{" "}
                  <span className="text-xs text-red-500">↑ 0.8Days</span>
                </h2>
                <p className="text-xs text-gray-400">Target: 2 days</p>
              </div>
              <div className="p-4 bg-white rounded-xl shadow border">
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-500">Escalation Rate</p>
                  <span className="text-xs text-red-600 bg-red-100 p-1 rounded-lg">
                    High
                  </span>
                </div>
                <h2 className="text-2xl font-semibold">
                  18% <span className="text-xs text-red-500">↓ 5%</span>
                </h2>
                <p className="text-xs text-gray-400">Target: 10%</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
            <ComplaintCategories />
            <SentimentAnalysis />
            <RiskImpact />
          </div>

          <div className="p-6">
            <ComplaintAnalysis />
          </div>
        </main>
      </div>
    </div>
  );
};
export default ComplaintDashboard;
