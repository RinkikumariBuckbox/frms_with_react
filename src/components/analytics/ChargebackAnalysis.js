const chargebackData = [
  {
    label: "Fraud",
    percent: 42,
    cases: 526,
    value: "$52,450",
    color: "#f87171",
  },
  {
    label: "Product",
    percent: 28,
    cases: 351,
    value: "$35,120",
    color: "#facc15",
  },
  {
    label: "Service",
    percent: 18,
    cases: 225,
    value: "$22,580",
    color: "#f97316",
  },
  {
    label: "Other",
    percent: 12,
    cases: 150,
    value: "$15,040",
    color: "#6b7280",
  },
];
const ChargebackAnalysis = () => {
  return (
    <div className="bg-white p-4 rounded shadow border">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-md font-semibold">Chargeback Analysis</h2>
        <select className="text-sm border rounded px-2 py-1 text-gray-600">
          <option>By Category</option>
        </select>
      </div>
      {chargebackData.map((item, idx) => (
        <div key={idx} className="mb-3">
          <div className="flex justify-between text-sm mb-1">
            <span>
              {item.label} <strong>{item.percent}%</strong>
            </span>
            <span className="text-gray-500 text-xs">{item.cases} cases</span>
          </div>
          <div className="h-2 bg-gray-200 rounded">
            <div
              className="h-2 rounded"
              style={{
                width: `${item.percent}%`,
                backgroundColor: item.color,
              }}
            ></div>
          </div>
          <div className="text-xs text-right text-gray-600">{item.value}</div>
        </div>
      ))}
    </div>
  );
};
export default ChargebackAnalysis;
