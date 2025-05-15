const TxnHistory = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-gray-800">Transaction History</h3>
        <a href="#" className="text-sm text-blue-600 font-medium">
          View Full History
        </a>
      </div>
      {[
        {
          amount: "$128.50",
          id: "#TX-9283",
          date: "Apr 23, 2025 14:32",
          status: "Approved",
          color: "green-500",
        },
        {
          amount: "$1,450.00",
          id: "#TX-9282",
          date: "Apr 20, 2025 12:15",
          status: "Declined",
          color: "red-500",
        },
        {
          amount: "$350.25",
          id: "#TX-9275",
          date: "Apr 22, 2025 18:44",
          status: "Flagged",
          color: "yellow-400",
        },
        {
          amount: "$75.99",
          id: "#TX-9268",
          date: "Apr 21, 2025 09:22",
          status: "Approved",
          color: "green-500",
        },
        {
          amount: "$210.75",
          id: "#TX-9252",
          date: "Apr 20, 2025 16:30",
          status: "Approved",
          color: "green-500",
        },
      ].map((tx, idx) => (
        <div
          key={idx}
          className="border-l-4 pl-2 my-3"
          style={{ borderColor: tx.color }}
        >
          <p className="text-sm font-semibold text-gray-700">{tx.amount}</p>
          <p className="text-xs text-gray-500">Transaction {tx.id}</p>
          <div className="text-xs text-gray-400 flex justify-between">
            <span>{tx.date}</span>
            <span
              className={`text-${tx.color.replace("-500", "-600")} font-medium`}
            >
              {tx.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
export default TxnHistory;
