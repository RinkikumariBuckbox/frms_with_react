const RiskProfileTrends = () => {
  return (
    <div className="bg-white p-4 rounded shadow border">
      <div className="flex justify-between items-start">
        <h3 className="font-semibold text-base">Dynamic Risk Profile Trends</h3>
        <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">
          Auto-updating
        </span>
      </div>
      <div className="mt-4 text-gray-700">
        <div className="flex justify-between items-center mb-3">
          <div>
            <div className="text-2xl font-bold">78</div>
            <div className="text-xs text-gray-500">Current Score</div>
          </div>
          <div>
            <div className="text-2xl font-bold">65</div>
            <div className="text-xs text-gray-500">30 Days Ago</div>
          </div>
          <div className="text-red-500 font-semibold text-sm flex items-center gap-1">
            ↑ 20% <span className="text-xs font-normal">Change</span>
          </div>
        </div>
        <ul className="space-y-2 text-sm">
          <li>
            <div className="flex justify-between">
              <span>Transaction Volume</span>
              <span className="text-red-500 font-medium">High Risk</span>
            </div>

            <div className="w-full h-2 bg-gray-200 rounded-full mb-4 mt-1">
              <div
                className="h-2 bg-red-500 rounded-full"
                style={{ width: "85%" }}
              ></div>
            </div>
          </li>
          <li>
            <div className="flex justify-between">
              <span>Geographic Dispersion</span>
              <span className="text-yellow-500 font-medium">Medium Risk</span>
            </div>

            <div className="w-full h-2 bg-gray-200 rounded-full mb-4 mt-1">
              <div
                className="h-2 bg-yellow-500 rounded-full"
                style={{ width: "60%" }}
              ></div>
            </div>
          </li>
          <li>
            <div className="flex justify-between">
              <span>Transaction Velocity</span>
              <span className="text-red-500 font-medium">High Risk</span>
            </div>

            <div className="w-full h-2 bg-gray-200 rounded-full mb-4 mt-1">
              <div
                className="h-2 bg-red-500 rounded-full"
                style={{ width: "80%" }}
              ></div>
            </div>
          </li>
          <li>
            <div className="flex justify-between">
              <span>Customer History</span>
              <span className="text-green-500 font-medium">Low Risk</span>
            </div>

            <div className="w-full h-2 bg-gray-200 rounded-full mb-4 mt-1">
              <div
                className="h-2 bg-green-500 rounded-full"
                style={{ width: "20%" }}
              ></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default RiskProfileTrends;
