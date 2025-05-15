import Header from "../Header";
import Sidebar from "../Sidebar";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import ChargebackAnalysis from "./ChargebackAnalysis";
import AgentPerformance from "./AgentPerformance";
import PaymentChannelDis from "./PaymentChannelDis";
import TxnTrends from "./TxnTrends";

const AnalyticsDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-base-content">
      <Header />

      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 overflow-y-auto">
          <div className="p-6 bg-gray-50 space-y-6">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl font-semibold">Analytics Dashboard</h1>
                <p className="text-sm text-gray-500">
                  Comprehensive analytics and insights for risk management
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
                  <p className="text-sm text-gray-500">Total Transactions</p>
                </div>
                <h2 className="text-2xl font-semibold">
                  127,392 <span className="text-xs text-green-500">↑ 12%</span>
                </h2>
                <p className="text-xs text-gray-400">$4.2M in value</p>
              </div>
              <div className="p-4 bg-white rounded-xl shadow border">
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-500">Fraud Prevention</p>
                </div>
                <h2 className="text-2xl font-semibold">
                  $238,450 <span className="text-xs text-green-500">↑ 8%</span>
                </h2>
                <p className="text-xs text-gray-400">Prevented Losses</p>
              </div>
              <div className="p-4 bg-white rounded-xl shadow border">
                <p className="text-sm text-gray-500">Revenue Loss</p>
                <h2 className="text-2xl font-semibold">
                  $42,180 <span className="text-xs text-red-500">↑ 5%</span>
                </h2>
                <p className="text-xs text-gray-400">
                  Due to pending decisions
                </p>
              </div>
              <div className="p-4 bg-white rounded-xl shadow border">
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-500">Decision Efficiency</p>
                </div>
                <h2 className="text-2xl font-semibold">
                  92.3% <span className="text-xs text-green-500">↓ 2.1%</span>
                </h2>
                <p className="text-xs text-gray-400">
                  Avg. decision time: 1.2s
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            <TxnTrends />
            <PaymentChannelDis />
            <ChargebackAnalysis />
            <AgentPerformance />
          </div>
        </main>
      </div>
    </div>
  );
};
export default AnalyticsDashboard;
