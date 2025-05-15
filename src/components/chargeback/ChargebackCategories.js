const ChargebackCategories = () => {
  return (
    <div className="bg-white p-4 rounded shadow border">
      <h2 className="text-md font-semibold mb-4">Chargeback Categories</h2>
      {[
        {
          label: "Fraud / Unauthorized",
          color: "red-500",
          percent: 58,
          change: "+24%",
        },
        {
          label: "Product Not Received",
          color: "blue-500",
          percent: 26,
          change: "+12%",
        },
        {
          label: "Quality Issues",
          color: "yellow-500",
          percent: 10,
          change: "-5%",
        },
        {
          label: "Duplicate Charge",
          color: "green-500",
          percent: 6,
          change: "-10%",
        },
      ].map((item, idx) => (
        <div key={idx} className="mb-3">
          <div className="flex justify-between text-sm mb-1">
            <span className="flex items-center gap-1">
              <div className={`w-2 h-2 bg-${item.color} rounded-full`}></div>
              {item.label}
            </span>
            <span>{item.percent}%</span>
          </div>
          <div className="h-2 bg-gray-200 rounded">
            <div
              className={`h-2 bg-${item.color} rounded`}
              style={{ width: `${item.percent}%` }}
            ></div>
          </div>
          <div className="text-xs text-right text-gray-400">
            {item.change} vs last month
          </div>
        </div>
      ))}
      <div className="text-sm font-medium mt-2">
        Total Predicted <span className="font-semibold">124 Chargebacks</span>
      </div>
    </div>
  );
};
export default ChargebackCategories;
