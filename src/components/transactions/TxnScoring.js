const TxnScoring = () => {
  const transactions = [
    {
      id: "#TX-9384",
      customer: "John Doe",
      initials: "JD",
      amount: "$528.75",
      time: "Just now",
      score: "12",
      status: "Approved",
      DecisionTime: "0.8s",
    },
    {
      id: "#TX-7521",
      customer: "Alice Smith",
      initials: "AS",
      amount: "$1,875.50",
      time: "1 min ago",
      score: "58",
      status: "Under Review",
      DecisionTime: "1.2s",
    },
    {
      id: "#TX-6982",
      customer: "Robert Brown",
      initials: "RB",
      amount: "$3,210.25",
      time: "3 min ago",
      score: "92",
      status: "Declined",
      DecisionTime: "0.9s",
    },
    {
      id: "#TX-6982",
      customer: "Sarah Johnson",
      initials: "RB",
      amount: "$3,210.25",
      time: "5 min ago",
      score: "18",
      status: "Approved",
      DecisionTime: "0.7s",
    },
  ];

  const statusStyle = {
    Declined: "bg-red-100 text-red-700",
    "Under Review": "bg-yellow-100 text-yellow-700",
    Monitoring: "bg-blue-100 text-blue-700",
    Approved: "bg-green-100 text-green-700",
  };

  const getRiskColor = (risk) => {
    if (risk >= 85) return "bg-red-500";
    if (risk >= 50) return "bg-yellow-500";
    return "bg-green-500";
  };

  return (
    <div className="bg-white rounded-xl shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            Real-Time Transaction Scoring
          </h3>
          <h2 className="text-gray-500">Live Transaction Feed</h2>
        </div>
        <div>
          {/* <span>Approved</span>
          <span>Under Review </span>
          <span>Declined</span> */}

          <div className="flex space-x-6 items-center">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              <span className="text-sm text-gray-700">Approved</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
              <span className="text-sm text-gray-700">Under Review</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="text-sm text-gray-700">Declined</span>
            </div>
          </div>
        </div>

        <div className="flex space-x-6 items-center">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            <span className="text-sm text-gray-700">Live Update</span>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead>
            <tr className="text-gray-600">
              <th className="p-2">Time</th>
              <th className="p-2">Transaction ID</th>
              <th className="p-2">Customer</th>
              <th className="p-2">Amount</th>
              <th className="p-2">Risk Score</th>
              <th className="p-2">Decision</th>
              <th className="p-2">Decision Time</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx, index) => (
              <tr key={index} className="border-t">
                <td className="p-2">{tx.time}</td>
                <td className="p-2 font-medium text-blue-600">{tx.id}</td>
                <td className="p-2 flex items-center space-x-2">
                  <span className="w-7 h-7 flex items-center justify-center bg-gray-200 rounded-full text-xs font-semibold">
                    {tx.initials}
                  </span>
                  <span>{tx.customer}</span>
                </td>
                <td className="p-2">{tx.amount}</td>
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
                <td className="p-2">{tx.DecisionTime}</td>

                <td className="p-2">
                  <a href="#" className="text-blue-600 hover:underline">
                    Details
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

export default TxnScoring;
