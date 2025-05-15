import {
  ArrowDown,
  ArrowUp,
  Eye,
  Pencil,
  RefreshCw,
  Filter,
} from "lucide-react";
// const scoreColor = (score) => {
//   if (score >= 75) return "text-red-500";
//   if (score >= 50) return "text-yellow-500";
//   return "text-green-500";
// };

const changeIndicator = (change) => {
  const isPositive = change > 0;
  return (
    <span
      className={`flex items-center gap-1 ${
        isPositive ? "text-green-600" : "text-red-500"
      }`}
    >
      {isPositive ? <ArrowUp size={14} /> : <ArrowDown size={14} />}
      {Math.abs(change)}%
    </span>
  );
};

const data = [
  {
    id: "#P-7294",
    initials: "JD",
    name: "John Doe",
    prev: 64,
    curr: 92,
    change: -28,
    time: "Apr 23, 2025 14:32",
    reason: "Multiple Failed Transactions",
    badge: "bg-red-100 text-red-600",
  },
  {
    id: "#P-5128",
    initials: "AS",
    name: "Alice Smith",
    prev: 87,
    curr: 62,
    change: 25,
    time: "Apr 23, 2025 11:45",
    reason: "Successful Payment History",
    badge: "bg-green-100 text-green-600",
  },
  {
    id: "#P-3671",
    initials: "RB",
    name: "Robert Brown",
    prev: 34,
    curr: 58,
    change: -24,
    time: "Apr 22, 2025 19:12",
    reason: "Unusual Transaction Pattern",
    badge: "bg-yellow-100 text-yellow-600",
  },
  {
    id: "#P-9215",
    initials: "LJ",
    name: "Lisa Johnson",
    prev: 52,
    curr: 18,
    change: 34,
    time: "Apr 22, 2025 10:08",
    reason: "Identity Verification Complete",
    badge: "bg-emerald-100 text-emerald-600",
  },
  {
    id: "#P-4326",
    initials: "MT",
    name: "Mark Thompson",
    prev: 28,
    curr: 78,
    change: -50,
    time: "Apr 21, 2025 22:37",
    reason: "Chargeback Filed",
    badge: "bg-rose-100 text-rose-600",
  },
];

const getRiskColor = (risk) => {
  if (risk >= 80) return "bg-red-500";
  if (risk >= 50) return "bg-yellow-500";
  return "bg-green-500";
};

const RiskProfileTable = () => {
  return (
    <div className="bg-white rounded shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-lg">Dynamic Risk Profile Updates</h3>
        <div className="flex gap-2">
          <button className="flex items-center gap-1 border px-3 py-1 rounded text-sm">
            <Filter size={14} /> Filter
          </button>
          <button className="flex items-center gap-1 bg-blue-600 text-white px-3 py-1 rounded text-sm">
            <RefreshCw size={14} /> Refresh
          </button>
        </div>
      </div>

      <table className="w-full text-sm">
        <thead className="text-left text-gray-500">
          <tr>
            <th className="py-2">Payer ID</th>
            <th>Payer Name</th>
            <th>Previous Score</th>
            <th>Current Score</th>
            <th>Change</th>
            <th>Last Transaction</th>
            <th>Update Reason</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className="border-t">
              <td className="py-2">{row.id}</td>
              <td className="flex items-center gap-2">
                <div
                  className="w-8 h-8 flex items-center justify-center rounded-full text-white font-medium"
                  style={{ backgroundColor: "#4B5563" }}
                >
                  {row.initials}
                </div>
                {row.name}
              </td>
              {/* <td className={scoreColor(row.prev)}>{row.prev}%</td>
              <td className={scoreColor(row.curr)}>{row.curr}%</td> */}
              <td className="py-2 px-4">
                <div className="flex items-center gap-2">
                  <span
                    className={`text-sm font-medium ${
                      getRiskColor(row.prev) === "bg-red-500"
                        ? "text-red-600"
                        : getRiskColor(row.prev) === "bg-yellow-500"
                        ? "text-yellow-600"
                        : "text-green-600"
                    }`}
                  >
                    {row.prev}%
                  </span>
                  <div className="w-20 h-2 bg-gray-200 rounded-full">
                    <div
                      className={`h-2 rounded-full ${getRiskColor(row.prev)}`}
                      style={{ width: `${row.prev}%` }}
                    ></div>
                  </div>
                </div>
              </td>

              <td className="py-2 px-4">
                <div className="flex items-center gap-2">
                  <span
                    className={`text-sm font-medium ${
                      getRiskColor(row.curr) === "bg-red-500"
                        ? "text-red-600"
                        : getRiskColor(row.curr) === "bg-yellow-500"
                        ? "text-yellow-600"
                        : "text-green-600"
                    }`}
                  >
                    {row.curr}%
                  </span>
                  <div className="w-20 h-2 bg-gray-200 rounded-full">
                    <div
                      className={`h-2 rounded-full ${getRiskColor(row.curr)}`}
                      style={{ width: `${row.curr}%` }}
                    ></div>
                  </div>
                </div>
              </td>
              <td>{changeIndicator(row.change)}</td>
              <td>{row.time}</td>
              <td>
                <span
                  className={`text-xs px-2 py-1 rounded-full font-medium ${row.badge}`}
                >
                  {row.reason}
                </span>
              </td>
              <td className="flex gap-2 text-gray-500">
                <Eye size={16} className="cursor-pointer" />
                <Pencil size={16} className="cursor-pointer" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default RiskProfileTable;
