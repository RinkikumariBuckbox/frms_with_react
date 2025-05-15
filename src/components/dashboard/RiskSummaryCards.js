const RiskSummaryCards = () => {
  return (
    <div className="grid grid-cols-4 gap-6 mb-6">
      {[
        {
          title: "Risk Score",
          value: "78/100",
          trend: "+12%",
          level: "High",
          levelColor: "text-red-500",
          desc: "Compared to last month",
        },
        {
          title: "Predicted Chargebacks",
          value: "24",
          trend: "-3%",
          level: "Medium",
          levelColor: "text-yellow-500",
          desc: "Projected for next 30 days",
        },
        {
          title: "Flagged Transactions",
          value: "47",
          trend: "+18%",
          level: "Attention",
          levelColor: "text-orange-500",
          desc: "In the last 24 hours",
        },
        {
          title: "Customer Complaints",
          value: "8",
          trend: "-22%",
          level: "Low",
          levelColor: "text-green-500",
          desc: "Projected for next 7 days",
        },
      ].map((card, idx) => (
        <div key={idx} className="bg-white rounded-lg shadow p-4">
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm text-gray-600">{card.title}</span>
            <span className={`text-xs font-semibold ${card.levelColor}`}>
              {card.level}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-gray-800">
              {card.value}
            </span>
            <span
              className={`text-sm ${
                card.trend.startsWith("+") ? "text-red-500" : "text-green-500"
              }`}
            >
              {card.trend}
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-1">{card.desc}</p>
        </div>
      ))}
    </div>
  );
};
export default RiskSummaryCards;
