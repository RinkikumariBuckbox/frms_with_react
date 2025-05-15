// App.js
import React from "react";

function RiskScoringThresholds() {
  return (
    <div className="bg-white p-6 rounded shadow border">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-md font-semibold">Risk Scoring Thresholds</h2>
        <button className="text-sm text-blue-600 hover:underline">
          Adjust
        </button>
      </div>

      <div className="mb-6">
        <div className="text-sm font-medium mb-2">
          Current Threshold Settings
        </div>
        <div className="relative h-4 w-full bg-gray-200 rounded-full overflow-hidden">
          <div
            className="absolute top-0 left-0 h-4 bg-emerald-400"
            style={{ width: "40%" }}
          ></div>
          <div
            className="absolute top-0 left-[40%] h-4 bg-yellow-400"
            style={{ width: "35%" }}
          ></div>
          <div
            className="absolute top-0 left-[75%] h-4 bg-red-400"
            style={{ width: "25%" }}
          ></div>
        </div>
        <div className="flex justify-between text-xs text-gray-600 mt-2">
          <span>0%</span>
          <span>40%</span>
          <span>75%</span>
          <span>100%</span>
        </div>
        <div className="flex justify-between text-xs mt-2">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span>Auto-Approve</span>
            </div>
            <span className="text-gray-500">0-40%</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <span>Manual Review</span>
            </div>
            <span className="text-gray-500">41-75%</span>
          </div>
          <div className="flex flex-col items-end">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              <span>Auto-Decline</span>
            </div>
            <span className="text-gray-500">76-100%</span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-4" />

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
        <div className="bg-gray-50 rounded p-4">
          <div className="text-gray-500">False Positive Rate</div>
          <div className="text-xl font-semibold text-gray-900">3.2%</div>
          <div className="text-green-600 text-xs mt-1">
            ↓ 0.5% from last week
          </div>
        </div>
        <div className="bg-gray-50 rounded p-4">
          <div className="text-gray-500">False Negative Rate</div>
          <div className="text-xl font-semibold text-gray-900">1.8%</div>
          <div className="text-green-600 text-xs mt-1">
            ↓ 0.3% from last week
          </div>
        </div>
        <div className="bg-gray-50 rounded p-4">
          <div className="text-gray-500">Manual Review Rate</div>
          <div className="text-xl font-semibold text-gray-900">12.5%</div>
          <div className="text-red-600 text-xs mt-1">↑ 2.1% from last week</div>
        </div>
        <div className="bg-gray-50 rounded p-4">
          <div className="text-gray-500">Avg. Review Time</div>
          <div className="text-xl font-semibold text-gray-900">4.2 min</div>
          <div className="text-green-600 text-xs mt-1">
            ↓ 0.8 min from last week
          </div>
        </div>
      </div>
    </div>
  );
}

export default RiskScoringThresholds;
