const transactions = [
  {
    id: "#TX-8294",
    name: "John Doe",
    initials: "JD",
    amount: "$2,450.00",
    date: "Apr 23, 2025",
    riskFactors: ["New Customer", "IP Mismatch"],
    prob: 92,
    action: "Block & Review",
  },
  {
    id: "#TX-7521",
    name: "Alice Smith",
    initials: "AS",
    amount: "$1,875.50",
    date: "Apr 22, 2025",
    riskFactors: ["Multiple Cards", "High Value"],
    prob: 87,
    action: "Additional Auth",
  },
  {
    id: "#TX-6982",
    name: "Robert Brown",
    initials: "RB",
    amount: "$3,210.25",
    date: "Apr 21, 2025",
    riskFactors: ["Unusual Location", "Device Change"],
    prob: 82,
    action: "Additional Auth",
  },
  {
    id: "#TX-6453",
    name: "Lisa Johnson",
    initials: "LJ",
    amount: "$1,240.75",
    date: "Apr 20, 2025",
    riskFactors: ["Velocity", "High Value"],
    prob: 68,
    action: "Monitor",
  },
];

const HighRiskTransactions = () => {
  return (
    <div className="bg-white p-4 rounded shadow border">
      <div className="flex justify-between mb-4">
        <h2 className="text-md font-semibold">
          Transactions with High Chargeback Risk
        </h2>
        <button className="text-sm text-blue-600">View All</button>
      </div>
      <div className="overflow-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-gray-600 border-b">
            <tr>
              <th className="p-2">Transaction ID</th>
              <th className="p-2">Customer</th>
              <th className="p-2">Amount</th>
              <th className="p-2">Date</th>
              <th className="p-2">Risk Factors</th>
              <th className="p-2">Chargeback Prob.</th>
              <th className="p-2">Recommended Action</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx, idx) => (
              <tr key={idx} className="border-b hover:bg-gray-50">
                <td className="p-2">{tx.id}</td>
                <td className="p-2 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">
                    {tx.initials}
                  </div>
                  {tx.name}
                </td>
                <td className="p-2">{tx.amount}</td>
                <td className="p-2">{tx.date}</td>
                <td className="p-2 space-x-1">
                  {tx.riskFactors.map((factor, i) => (
                    <span
                      key={i}
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        factor.length > 9
                          ? "bg-red-100 text-red-600"
                          : "bg-yellow-100 text-yellow-600"
                      }`}
                    >
                      {factor}
                    </span>
                  ))}
                </td>
                <td className="p-2 text-red-600 font-semibold">{tx.prob}%</td>
                <td className="p-2">
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded ${
                      tx.action === "Monitor"
                        ? "bg-blue-600 text-white"
                        : tx.action === "Block & Review"
                        ? "bg-red-600 text-white"
                        : "bg-orange-500 text-white"
                    }`}
                  >
                    {tx.action}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end items-center mt-4 text-sm gap-2 text-gray-600">
        <span>Showing 4 of 24 high-risk transactions</span>
        <div className="flex items-center space-x-1">
          <button className="px-2 py-1 border rounded">Previous</button>
          <button className="px-2 py-1 border rounded bg-blue-100">1</button>
          <button className="px-2 py-1 border rounded">2</button>
          <button className="px-2 py-1 border rounded">3</button>
          <button className="px-2 py-1 border rounded">Next</button>
        </div>
      </div>
    </div>
  );
};

export default HighRiskTransactions;
