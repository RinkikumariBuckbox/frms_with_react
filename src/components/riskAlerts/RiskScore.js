const RiskScore = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-gray-800">Risk Score Trend</h3>
        <div className="space-x-1">
          <button className="px-2 py-1 text-sm text-gray-600 bg-gray-100 rounded">
            Day
          </button>
          <button className="px-2 py-1 text-sm text-white bg-blue-600 rounded">
            Week
          </button>
          <button className="px-2 py-1 text-sm text-gray-600 bg-gray-100 rounded">
            Month
          </button>
        </div>
      </div>
      <div className="h-36 flex items-end space-x-2 mt-4">
        {[
          { label: "Apr 17", height: "h-8", color: "bg-green-500" },
          { label: "Apr 18", height: "h-10", color: "bg-green-500" },
          { label: "Apr 19", height: "h-8", color: "bg-green-500" },
          { label: "Apr 20", height: "h-16", color: "bg-yellow-400" },
          { label: "Apr 21", height: "h-20", color: "bg-yellow-400" },
          { label: "Apr 22", height: "h-24", color: "bg-yellow-400" },
          { label: "Apr 23", height: "h-28", color: "bg-red-500" },
        ].map((bar, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-xs text-gray-500"
          >
            <div className={`w-4 ${bar.height} ${bar.color} rounded-t`}></div>
            <span>{bar.label}</span>
          </div>
        ))}
      </div>
      <p className="text-xs text-gray-600 mt-2">
        Risk score increased by{" "}
        <span className="text-red-500 font-medium">28%</span> in the last 7 days
      </p>
    </div>
  );
};
export default RiskScore;
