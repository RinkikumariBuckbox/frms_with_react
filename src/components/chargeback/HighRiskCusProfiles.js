const HighRiskCusProfiles = () => {
  return (
    <div className="bg-white p-4 rounded shadow border col-span-1">
      <div className="flex justify-between mb-4">
        <h2 className="text-md font-semibold">High-Risk Customer Profiles</h2>
        <button className="text-blue-600 text-sm">View All</button>
      </div>
      {[
        {
          initials: "JD",
          name: "John Doe",
          amount: "$2,450.00",
          prob: "91%",
          date: "Apr 23, 2025",
          color: "red-500",
        },
        {
          initials: "AS",
          name: "Alice Smith",
          amount: "$1,875.50",
          prob: "87%",
          date: "Apr 22, 2025",
          color: "red-500",
        },
        {
          initials: "RB",
          name: "Robert Brown",
          amount: "$3,210.25",
          prob: "82%",
          date: "Apr 21, 2025",
          color: "red-500",
        },
        {
          initials: "LJ",
          name: "Lisa Johnson",
          amount: "$1,240.75",
          prob: "68%",
          date: "Apr 20, 2025",
          color: "yellow-400",
        },
      ].map((user, idx) => (
        <div key={idx} className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-sm font-semibold">
              {user.initials}
            </div>
            <div>
              <div className="text-sm font-medium">{user.name}</div>
              <div className="text-xs text-gray-500">
                Last Transaction: {user.amount}
              </div>
            </div>
          </div>
          <div className="text-right text-xs text-gray-600">
            <div className="text-red-500 font-semibold">
              Chargeback Prob: {user.prob}
            </div>
            <div>{user.date}</div>
          </div>
        </div>
      ))}
      <div className="text-sm text-gray-600 mt-2">
        18 customers with &gt;70% chargeback probability
      </div>
      <div className="flex justify-end mt-2">
        <button className="bg-blue-600 text-white text-sm px-4 py-1 rounded">
          Take Action
        </button>
      </div>
    </div>
  );
};
export default HighRiskCusProfiles;
