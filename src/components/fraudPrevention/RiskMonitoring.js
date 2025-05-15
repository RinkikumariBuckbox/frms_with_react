const RiskMonitoring = () => {
  return (
    <div className="bg-white p-5 rounded shadow border">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Real-time Risk Monitoring</h2>
        <div className="flex items-center gap-3 text-sm">
          <span className="text-green-600 font-medium">● Live Updates</span>
          <div className="flex border rounded overflow-hidden text-xs">
            <button className="px-3 py-1 bg-blue-100 text-blue-700 font-medium">
              Hourly
            </button>
            <button className="px-3 py-1 hover:bg-gray-100">Daily</button>
            <button className="px-3 py-1 hover:bg-gray-100">Weekly</button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
        {/* Left Card - Risk Score */}
        <div className="border rounded p-4">
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-medium">Transaction Risk Score</h4>
            <span className="text-xs text-gray-500">Updated 2 min ago</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-24 h-24 mb-2">
              <svg viewBox="0 0 36 36" className="w-full h-full">
                <path
                  className="text-red-500"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                  d="M18 2.0845
                       a 15.9155 15.9155 0 0 1 0 31.831
                       a 15.9155 15.9155 0 0 1 0 -31.831"
                  strokeDasharray="76, 100"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-xl font-semibold">
                76
              </div>
            </div>
            <div className="flex justify-around w-full text-gray-600 text-xs mt-2">
              <div>
                78
                <br />
                <span className="text-gray-400">Yesterday</span>
              </div>
              <div>
                82
                <br />
                <span className="text-gray-400">Last Week</span>
              </div>
              <div>
                65
                <br />
                <span className="text-gray-400">Last Month</span>
              </div>
            </div>
          </div>
        </div>

        {/* Center Card - Approvals */}
        <div className="border rounded p-4">
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-medium">Transaction Approvals</h4>
            <span className="text-xs text-gray-500">Updated 30 sec ago</span>
          </div>

          <div className="mb-3">
            <div className="flex justify-between mb-1">
              <span>Auto-approved</span>
              <span className="font-medium">82%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full mb-2">
              <div
                className="h-2 bg-green-500 rounded-full"
                style={{ width: "82%" }}
              ></div>
            </div>

            <div className="flex justify-between mb-1">
              <span>Manual review</span>
              <span className="font-medium">15%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full mb-2">
              <div
                className="h-2 bg-yellow-500 rounded-full"
                style={{ width: "15%" }}
              ></div>
            </div>

            <div className="flex justify-between mb-1">
              <span>Declined</span>
              <span className="font-medium">3%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full mb-2">
              <div
                className="h-2 bg-red-500 rounded-full"
                style={{ width: "3%" }}
              ></div>
            </div>
          </div>

          <div className="text-xs text-gray-600">
            1,248 transactions today{" "}
            <span className="text-green-600 ml-2 font-semibold">↑ 4.2%</span>
          </div>
        </div>

        {/* Right Card - Alerts */}
        <div className="border rounded p-4">
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-medium">Risk Alerts</h4>
            <span className="text-xs text-gray-500">● Live</span>
          </div>

          <div className="space-y-2">
            <div className="flex items-start gap-2 bg-red-50 p-2 rounded">
              <div className="text-red-500">🚨</div>
              <div>
                <div className="text-sm font-medium">
                  Unusual transaction pattern detected
                </div>
                <div className="text-xs text-gray-500">2 minutes ago</div>
              </div>
            </div>

            <div className="flex items-start gap-2 bg-yellow-50 p-2 rounded">
              <div className="text-yellow-500">⚠️</div>
              <div>
                <div className="text-sm font-medium">
                  Customer risk profile updated
                </div>
                <div className="text-xs text-gray-500">15 minutes ago</div>
              </div>
            </div>

            <div className="flex items-start gap-2 bg-blue-50 p-2 rounded">
              <div className="text-blue-500">ℹ️</div>
              <div>
                <div className="text-sm font-medium">
                  New agent risk assessment completed
                </div>
                <div className="text-xs text-gray-500">45 minutes ago</div>
              </div>
            </div>
          </div>

          <div className="mt-3 text-blue-600 text-sm hover:underline cursor-pointer">
            View all alerts
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskMonitoring;
