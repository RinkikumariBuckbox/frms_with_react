const FroudCustomerRisk = () => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Customer Risk Profiles
        </h2>
        <p className="text-gray-500 text-sm">Auto-updating enabled</p>
        <a href="#" className="text-sm text-blue-600 hover:underline">
          View All Customers
        </a>
      </div>
      <input
        type="text"
        placeholder="Search customers..."
        className="w-full border px-3 py-2 rounded mb-3 text-sm"
      />
      <ul className="space-y-3 text-sm">
        {[
          {
            name: "John Doe",
            id: "CU-2938",
            color: "text-red-500",
            risk: "91%",
            probability: "78%",
            initials: "JD",
          },
          {
            name: "Alice Smith",
            id: "CU-7621",
            color: "text-red-500",
            risk: "87%",
            probability: "72%",
            initials: "AS",
          },
          {
            name: "Robert Brown",
            id: "CU-3489",
            color: "text-yellow-500",
            risk: "42%",
            probability: "35%",
            initials: "RB",
          },
          {
            name: "Lisa Johnson",
            id: "CU-9152",
            color: "text-green-500",
            risk: "18%",
            probability: "12%",
            initials: "LJ",
          },
        ].map((customer, idx) => (
          <li key={idx} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center text-white font-semibold ${customer.color}`}
              >
                {customer.initials}
              </div>
              <div>
                <div className="font-medium text-gray-800">{customer.name}</div>
                <div className="text-gray-500 text-xs">ID: {customer.id}</div>
              </div>
            </div>
            <div className="text-right">
              <div className={`text-sm ${customer.color}`}>
                Risk:{" "}
                <span className={`font-semibold ${customer.color}`}>
                  {customer.risk}
                </span>
              </div>
              <div className="text-xs text-gray-500">
                Chargeback Probability: {customer.probability}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FroudCustomerRisk;
