import { useNavigate } from "react-router-dom";

const CustomerRiskProfiles = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Customer Risk Profiles
        </h2>
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
            color: "red",
            risk: "91%",
            probability: "78%",
            initials: "JD",
          },
          {
            name: "Alice Smith",
            id: "CU-7621",
            color: "red",
            risk: "87%",
            probability: "72%",
            initials: "AS",
          },
          {
            name: "Robert Brown",
            id: "CU-3489",
            color: "yellow",
            risk: "42%",
            probability: "35%",
            initials: "RB",
          },
          {
            name: "Lisa Johnson",
            id: "CU-9152",
            color: "green",
            risk: "18%",
            probability: "12%",
            initials: "LJ",
          },
        ].map((customer, idx) => (
          <li key={idx} className="flex items-center justify-between">
            <div
              onClick={() => navigate("/agent-profile-info")}
              className="flex items-center gap-3 cursor-pointer"
            >
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center bg-${customer.color}-200 font-semibold text-${customer.color}-500`}
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

export default CustomerRiskProfiles;
