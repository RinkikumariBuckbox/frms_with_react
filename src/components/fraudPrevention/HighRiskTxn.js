const HighRiskTxn = () => {
  const transactions = [
    {
      id: "#TX-8294",
      customer: "John Doe",
      initials: "JD",
      agent: "Michael Johnson",
      amount: "$2,450.00",
      date: "Apr 23, 2025",
      score: "92",
      status: "Flagged",
      img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg",
      action: "Review",
    },
    {
      id: "#TX-7521",
      customer: "Robert Brown",
      initials: "RB",
      agent: "David Chen",
      amount: "$1,875.50",
      date: "Apr 22, 2025",
      score: "88",
      status: "Under Review",
      img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg",
      action: "Review",
    },
    {
      id: "#TX-7521",
      customer: "Alice Smith",
      initials: "AS",
      agent: "Sarah Williams",
      amount: "$1,875.50",
      date: "Apr 21, 2025",
      score: "86",
      status: "Monitoring",
      img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg",
      action: "Review",
    },
  ];

  const statusStyle = {
    Flagged: "bg-red-100 text-red-700",
    "Under Review": "bg-yellow-100 text-yellow-700",
    Monitoring: "bg-blue-100 text-blue-700",
  };

  const getRiskColor = (risk) => {
    if (risk >= 85) return "bg-red-500";
    if (risk >= 60) return "bg-yellow-500";
    return "bg-green-500";
  };
  return (
    <div className="bg-white rounded-xl shadow p-4 mt-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">
          Recent High-Risk Transactions
        </h3>
        <a href="#" className="text-sm text-blue-600 hover:underline">
          View All
        </a>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead>
            <tr className="text-gray-600">
              <th className="p-2">Transaction ID</th>
              <th className="p-2">Customer</th>
              <th className="p-2">Agent</th>
              <th className="p-2">Amount</th>
              <th className="p-2">Date</th>
              <th className="p-2">Risk Score</th>
              <th className="p-2">Status</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx, index) => (
              <tr key={index} className="border-t">
                <td className="p-2 font-medium text-blue-600">{tx.id}</td>
                <td className="p-2">
                  <div className="flex items-center space-x-2">
                    <span className="w-7 h-7 flex items-center justify-center bg-blue-200 text-blue-500 rounded-full text-xs font-semibold">
                      {tx.initials}
                    </span>
                    <span>{tx.customer}</span>
                  </div>
                </td>
                <td className="p-2">
                  <div className="flex items-center space-x-2">
                    <img
                      src={tx.img}
                      alt={tx.agent}
                      className="w-6 h-6 rounded-full"
                    />
                    <span>{tx.agent}</span>
                  </div>
                </td>

                <td className="p-2">{tx.amount}</td>
                <td className="p-2">{tx.date}</td>

                <td className="py-2 px-4">
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-sm font-medium ${
                        getRiskColor(tx.score) === "bg-red-500"
                          ? "text-red-600"
                          : getRiskColor(tx.score) === "bg-yellow-500"
                          ? "text-yellow-600"
                          : "text-green-600"
                      }`}
                    >
                      {tx.score}%
                    </span>
                    <div className="w-20 h-2 bg-gray-200 rounded-full">
                      <div
                        className={`h-2 rounded-full ${getRiskColor(tx.score)}`}
                        style={{ width: `${tx.score}%` }}
                      ></div>
                    </div>
                  </div>
                </td>
                <td className="p-2">
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      statusStyle[tx.status]
                    }`}
                  >
                    {tx.status}
                  </span>
                </td>
                <td className="p-2">
                  <a href="#" className="text-blue-600 hover:underline">
                    {tx.action}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default HighRiskTxn;
