const ApprovalOptimization = () => {
  return (
    <div className="bg-white p-4 rounded shadow border">
      <div className="flex justify-between">
        <h2 className="text-lg font-semibold mb-4">Approval Optimization</h2>
        <div className="flex space-x-6 items-center">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            <span className="text-sm text-gray-700">Current</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 bg-blue-400 rounded-full"></span>
            <span className="text-sm text-gray-700">Recommended</span>
          </div>
        </div>
      </div>

      <div className="text-sm text-gray-700 mb-2">
        <div className="flex justify-between">
          <div>
            <div>
              Current Approval Rate: <strong>94.3%</strong>
            </div>
            <div className="text-gray-500">Potential Approval Rate: 96.8%</div>
          </div>

          <div className="text-center mb-6">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm font-medium">
              Apply Recommendations
            </button>
          </div>
        </div>
        <div className="w-full bg-gray-200 h-2 rounded mt-1 mb-4 relative">
          <div className="bg-green-500 h-2 rounded w-[94.3%]"></div>
          <div className="absolute top-0 right-[3.2%] w-2 h-2 bg-blue-600 rounded-full"></div>
        </div>
      </div>

      <div className="space-y-3 mb-6">
        <div className="bg-blue-50 p-3 rounded border border-blue-200">
          <div className="text-sm font-medium">
            Adjust manual review threshold
          </div>
          <div className="text-xs text-gray-500">From 75% to 80%</div>
          <div className="text-sm text-green-600 font-medium">
            +1.2% approvals
          </div>
          <div className="text-xs text-gray-500">Est. $45,000 more revenue</div>
        </div>
        <div className="bg-blue-50 p-3 rounded border border-blue-200">
          <div className="text-sm font-medium">
            Reduce geographic risk weight
          </div>
          <div className="text-xs text-gray-500">From 0.8 to 0.6 factor</div>
          <div className="text-sm text-green-600 font-medium">
            +0.8% approvals
          </div>
          <div className="text-xs text-gray-500">Est. $32,000 more revenue</div>
        </div>
        <div className="bg-blue-50 p-3 rounded border border-blue-200">
          <div className="text-sm font-medium">
            Adjust new customer risk model
          </div>
          <div className="text-xs text-gray-500">
            Implement improved ML model v2.4
          </div>
          <div className="text-sm text-green-600 font-medium">
            +0.5% approvals
          </div>
          <div className="text-xs text-gray-500">Est. $19,500 more revenue</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="bg-gray-50 p-3 rounded border text-green-700">
          <div className="text-xs text-gray-500">Est. Additional Revenue</div>
          <div className="text-xl font-semibold">$96,500</div>
          <div className="text-xs text-gray-500">Per month</div>
        </div>
        <div className="bg-gray-50 p-3 rounded border text-red-700">
          <div className="text-xs text-gray-500">Est. Additional Fraud</div>
          <div className="text-xl font-semibold">$12,200</div>
          <div className="text-xs text-gray-500">Per month</div>
        </div>
        <div className="bg-gray-50 p-3 rounded border text-blue-700">
          <div className="text-xs text-gray-500">Net Benefit</div>
          <div className="text-xl font-semibold">$84,300</div>
          <div className="text-xs text-gray-500">Per month</div>
        </div>
        <div className="bg-gray-50 p-3 rounded border text-emerald-600">
          <div className="text-xs text-gray-500">Risk/Reward Ratio</div>
          <div className="text-xl font-semibold">7.9:1</div>
          <div className="text-xs text-emerald-600">Favorable</div>
        </div>
      </div>
    </div>
  );
};
export default ApprovalOptimization;
