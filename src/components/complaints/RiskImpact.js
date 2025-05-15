const RiskImpact = () => {
  return (
    <div className="bg-white p-4 rounded shadow border"
    // className="space-y-6 mt-6"
    >
      <div
      //   className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-gray-800">Risk Impact</h3>
          </div>
          {[
            {
              title: "Chargeback Probability",
              level: "High",
              color: "bg-red-500 w-4/5",
            },
            {
              title: "Repeat Purchase Impact",
              level: "High",
              color: "bg-red-400 w-3/5",
            },
            {
              title: "Regulatory Exposure",
              level: "Medium",
              color: "bg-yellow-500 w-4/5",
            },
            {
              title: "Reputation Risk",
              level: "Medium",
              color: "bg-yellow-400 w-3/5",
            },
            {
              title: "Overall Risk Impact",
              level: "High (64%)",
              color: "bg-red-500 w-5/6",
            },
          ].map((risk, idx) => (
            <div key={idx} className="mb-4">
              <div className="flex justify-between text-sm font-medium">
                <span>{risk.title}</span>
                <span className="text-red-600 font-semibold">{risk.level}</span>
              </div>
              <div className="w-full bg-gray-200 h-1 rounded-full">
                <div className={`h-1 rounded-full  ${risk.color}`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RiskImpact;
