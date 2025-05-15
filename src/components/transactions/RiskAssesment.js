const RiskAssesment = () => {
  return (
    <div>
      <h3 className="text-sm font-semibold mb-2">Risk Assessment</h3>
      <div className="text-sm text-gray-700 mb-2">
        <div className="flex justify-between">
          <span>Overall Risk Score</span>
          <span className="text-red-600 font-semibold">92% - High Risk</span>
        </div>
        <div className="w-full bg-gray-200 h-1.5 rounded mt-1 mb-2">
          <div className="bg-red-500 h-1.5 rounded w-[92%]"></div>
        </div>

        <div className="flex justify-between">
          <span>Geographic Risk</span>
          <span className="text-red-600">Very High (95%)</span>
        </div>
        <div className="w-full bg-gray-200 h-1.5 rounded mt-1 mb-2">
          <div className="bg-red-400 h-1.5 rounded w-[95%]"></div>
        </div>

        <div className="flex justify-between">
          <span>Transaction Amount</span>
          <span className="text-orange-500">High (85%)</span>
        </div>
        <div className="w-full bg-gray-200 h-1.5 rounded mt-1 mb-2">
          <div className="bg-orange-400 h-1.5 rounded w-[85%]"></div>
        </div>

        <div className="flex justify-between">
          <span>Customer History</span>
          <span className="text-yellow-600">Medium (60%)</span>
        </div>
        <div className="w-full bg-gray-200 h-1.5 rounded mt-1 mb-2">
          <div className="bg-yellow-400 h-1.5 rounded w-[60%]"></div>
        </div>

        <div className="flex justify-between">
          <span>Address Verification</span>
          <span className="text-red-600">Failed (100%)</span>
        </div>
        <div className="w-full bg-gray-200 h-1.5 rounded mt-1 mb-2">
          <div className="bg-red-600 h-1.5 rounded w-[100%]"></div>
        </div>
      </div>

      <div className="bg-red-50 text-sm text-red-800 p-3 rounded border border-red-200">
        <div className="font-semibold mb-1">Decline Reasons:</div>
        <ul className="list-disc list-inside">
          <li>Shipping address in high-risk region</li>
          <li>Amount significantly higher than customer average</li>
          <li>Billing and shipping address mismatch</li>
          <li>Recent account information changes</li>
        </ul>
      </div>

      <div className="flex justify-end mt-6 space-x-3">
        <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm">
          Override & Approve
        </button>
        <button className="px-4 py-2 border rounded text-gray-700 hover:bg-gray-100 text-sm">
          Request More Info
        </button>
      </div>
    </div>
  );
};
export default RiskAssesment;
