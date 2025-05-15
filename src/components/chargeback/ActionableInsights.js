const ActionableInsights = () => {
  const insights = [
    {
      type: "Critical",
      title: "Fraud Surge Detected",
      message: "58% of predicted chargebacks are fraud-related...",
      color: "bg-red-100",
      actions: ["Urgent Action", "Dismiss"],
    },
    {
      type: "Warning",
      title: "High-Risk Transaction Pattern",
      message: "Multiple high-value transactions from new customers...",
      color: "bg-yellow-100",
      actions: ["Review", "Dismiss"],
    },
    {
      type: "Info",
      title: "Recommendation: Enhanced Verification",
      message: "Avg. score 89.2 across 3.6k flagged cases...",
      color: "bg-blue-100",
      actions: [],
    },
    {
      type: "Critical",
      title: "Fraud Surge Detected",
      message: "58% of predicted chargebacks are fraud-related...",
      color: "bg-red-100",
      actions: ["Urgent Action", "Dismiss"],
    },
    {
      type: "Warning",
      title: "Opportunity: Risk Rules Optimization",
      message:
        "Current risk rules are declining 8% of legitimate transactions. Adjusting threshold scores could increase approval rates while maintaining fraud protection.",
      color: "bg-green-100",
      actions: ["Optimize", "Anylize More"],
    },
    {
      type: "Info",
      title: "System Suggestion: Recheck Manual Reviews",
      message: "10% of manual reviews had matching predicted scores...",
      color: "bg-blue-100",
      actions: ["Review"],
    },
  ];

  return (
    <div className="bg-white p-4 rounded shadow border col-span-2">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-md font-semibold">Actionable Insights</h2>
        <div className="text-xs text-gray-400">Updated 25 minutes ago</div>
      </div>

      {/* Scrollable container */}
      <div className="max-h-64 overflow-y-auto pr-2">
        {insights.map((insight, idx) => (
          <div key={idx} className={`p-3 mb-3 rounded ${insight.color}`}>
            <div className="text-sm font-semibold">{insight.title}</div>
            <div className="text-xs text-gray-600 mt-1">{insight.message}</div>
            <div className="flex gap-2 mt-2">
              {insight.actions.map((action, i) => (
                <button
                  key={i}
                  className={`text-sm px-2 py-1 rounded ${
                    i === 0
                      ? "bg-red-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {action}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="text-sm text-gray-600 mt-4 flex justify-between items-center">
        7 urgent and 12 standard insights available
        <button className="text-sm text-blue-600">View All Insights</button>
      </div>
    </div>
  );
};

export default ActionableInsights;
