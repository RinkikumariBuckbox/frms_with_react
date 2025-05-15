import {
  User,
  AlertTriangle,
  CheckCircle,
  Download,
  RefreshCcw,
  Pencil,
} from "lucide-react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import CusProfileDashboard from "./CusProfileDashboard";
import TransactionHistory from "./TransactionHistory";
import ActiveRiskRules from "./ActiveRiskRules";

export default function CustomerProfile() {
  return (
    <div className="min-h-screen bg-gray-50 text-base-content">
      <Header />
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 overflow-y-auto">
          <div className="p-6 bg-gray-50 ">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h1 className="text-2xl font-semibold">
                  Customer Profile Management
                </h1>
                <p className="text-sm text-gray-500">
                  View and manage customer risk profiles with predictive
                  analytics
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <span className="text-sm font-medium text-gray-700">
                  Period:
                </span>
                <span className="text-sm font-semibold">
                  Apr 1 - Apr 23, 2025
                </span>
                <button className="p-2 hover:bg-gray-200 rounded">
                  <Download size={18} />
                </button>
                <button className="p-2 hover:bg-gray-200 rounded">
                  <RefreshCcw size={18} />
                </button>
              </div>
            </div>

            {/* Profile Card */}
            <div className="bg-white rounded-lg shadow-sm p-5">
              {/* Header */}
              <div className="flex justify-between items-start">
                <div className="flex items-start gap-4">
                  <User className="text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold">Selected Customer Profile</p>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="bg-blue-100 text-blue-600 font-bold w-14 h-14 rounded-full flex items-center justify-center text-lg">
                        JD
                      </div>
                      <div>
                        <p className="text-lg font-semibold">John Doe</p>
                        <p className="text-sm text-gray-600">
                          ID: CU-2938 • Joined: Feb 12, 2025 • Transactions: 24
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button className="border border-blue-500 text-blue-600 text-sm px-3 py-1 rounded hover:bg-blue-50">
                    Export Profile
                  </button>
                  <button className="bg-blue-600 text-white text-sm px-3 py-1 rounded hover:bg-blue-700 flex items-center gap-1">
                    <Pencil size={14} /> Edit Profile
                  </button>

                  <div className="mt-6 flex justify-end">
                    <div className="text-right">
                      <div>
                        <p className="text-3xl font-bold text-red-600">91%</p>
                        <p className="text-xs text-gray-500">Risk Score</p>
                      </div>

                      <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full mt-1 inline-block">
                        High Risk
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Info Grid */}
              <div className="grid grid-cols-4 gap-4 mt-6">
                <div className="bg-gray-100 p-3 rounded">
                  <p className="text-xs text-gray-500">Email</p>
                  <p className="text-sm font-medium">john.doe@example.com</p>
                </div>
                <div className="bg-gray-100 p-3 rounded">
                  <p className="text-xs text-gray-500">Phone</p>
                  <p className="text-sm font-medium">+1 (555) 123-4567</p>
                </div>
                <div className="bg-gray-100 p-3 rounded">
                  <p className="text-xs text-gray-500">Location</p>
                  <p className="text-sm font-medium">New York, USA</p>
                </div>
                <div className="bg-gray-100 p-3 rounded">
                  <p className="text-xs text-gray-500">Last Transaction</p>
                  <p className="text-sm font-medium">Apr 23, 2025</p>
                </div>
              </div>

              {/* Risk Factors & Recommendations */}
              <div className="mt-6 border-t pt-4 grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-semibold text-gray-600 mb-2">
                    RISK FACTORS
                  </h3>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-start gap-2 text-red-700">
                      <AlertTriangle size={16} className="mt-0.5" />
                      Multiple transactions from different locations
                    </li>
                    <li className="flex items-start gap-2 text-red-700">
                      <AlertTriangle size={16} className="mt-0.5" />
                      High velocity of transactions in short period
                    </li>
                    <li className="flex items-start gap-2 text-red-700">
                      <AlertTriangle size={16} className="mt-0.5" />
                      Previous chargeback history
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-600 mb-2">
                    RECOMMENDATIONS
                  </h3>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-start gap-2 text-green-700">
                      <CheckCircle size={16} className="mt-0.5" />
                      Enhanced verification for transactions over $1,000
                    </li>
                    <li className="flex items-start gap-2 text-green-700">
                      <CheckCircle size={16} className="mt-0.5" />
                      Limit transaction frequency to 3 per day
                    </li>
                    <li className="flex items-start gap-2 text-green-700">
                      <CheckCircle size={16} className="mt-0.5" />
                      Monitor for unusual spending patterns
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div>
            <CusProfileDashboard />
            <TransactionHistory />
            <ActiveRiskRules />
          </div>
        </main>
      </div>
    </div>
  );
}
