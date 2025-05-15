import { ChartSpline, Eye } from "lucide-react";

const complaints = [
  {
    id: "#C-4721",
    customer: {
      initials: "JD",
      name: "John Doe",
      id: "CU-2938",
      color: "bg-blue-100 text-blue-800",
    },
    category: "Customer Service",
    categoryColor: "bg-yellow-100 text-yellow-800",
    agent: {
      name: "Michael Johnson",
      id: "AG-7824",
      img: "https://i.pravatar.cc/40?img=1",
    },
    date: "Apr 23, 2025",
    time: "09:32 AM",
    score: 86,
    status: "Escalated",
    statusColor: "bg-red-100 text-red-600",
  },
  {
    id: "#C-4720",
    customer: {
      initials: "AS",
      name: "Alice Smith",
      id: "CU-7621",
      color: "bg-purple-100 text-purple-800",
    },
    category: "Product Quality",
    categoryColor: "bg-purple-100 text-purple-800",
    agent: {
      name: "Sarah Williams",
      id: "AG-4521",
      img: "https://i.pravatar.cc/40?img=2",
    },
    date: "Apr 22, 2025",
    time: "14:45 PM",
    score: 79,
    status: "In Progress",
    statusColor: "bg-yellow-100 text-yellow-800",
  },
  {
    id: "#C-4719",
    customer: {
      initials: "RB",
      name: "Robert Brown",
      id: "CU-3489",
      color: "bg-green-100 text-green-800",
    },
    category: "Billing Issues",
    categoryColor: "bg-orange-100 text-orange-800",
    agent: {
      name: "David Chen",
      id: "AG-3348",
      img: "https://i.pravatar.cc/40?img=3",
    },
    date: "Apr 22, 2025",
    time: "10:18 AM",
    score: 63,
    status: "Under Review",
    statusColor: "bg-blue-100 text-blue-800",
  },
  {
    id: "#C-4718",
    customer: {
      initials: "LJ",
      name: "Lisa Johnson",
      id: "CU-9152",
      color: "bg-pink-100 text-pink-800",
    },
    category: "Delivery Delays",
    categoryColor: "bg-blue-100 text-blue-800",
    agent: {
      name: "Emily Rodriguez",
      id: "AG-6192",
      img: "https://i.pravatar.cc/40?img=4",
    },
    date: "Apr 21, 2025",
    time: "16:22 PM",
    score: 32,
    status: "Resolved",
    statusColor: "bg-green-100 text-green-800",
  },
  {
    id: "#C-4717",
    customer: {
      initials: "TM",
      name: "Thomas Miller",
      id: "CU-5427",
      color: "bg-orange-100 text-orange-800",
    },
    category: "Customer Service",
    categoryColor: "bg-yellow-100 text-yellow-800",
    agent: {
      name: "Michael Johnson",
      id: "AG-7824",
      img: "https://i.pravatar.cc/40?img=1",
    },
    date: "Apr 21, 2025",
    time: "11:05 AM",
    score: 81,
    status: "In Progress",
    statusColor: "bg-yellow-100 text-yellow-800",
  },
];
const ComplaintAnalysis = () => {
  return (
    <div className="bg-white p-4 rounded shadow border">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-md font-semibold">Complaint Analysis</h2>
        <button className="bg-blue-600 text-white px-4 py-1 text-sm rounded hover:bg-blue-700">
          Filter
        </button>
      </div>

      <div className="grid grid-cols-4 gap-2 mb-3">
        <input
          type="text"
          placeholder="Search complaints..."
          className="col-span-1 border px-2 py-1 rounded text-sm"
        />
        <select className="border px-2 py-1 rounded text-sm">
          <option>Status</option>
        </select>
        <select className="border px-2 py-1 rounded text-sm">
          <option>Category</option>
        </select>
        <select className="border px-2 py-1 rounded text-sm">
          <option>Risk Level</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead>
            <tr className="text-gray-600 border-b">
              <th className="py-2 px-3">Case ID</th>
              <th className="py-2 px-3">Customer</th>
              <th className="py-2 px-3">Category</th>
              <th className="py-2 px-3">Agent</th>
              <th className="py-2 px-3">Date</th>
              <th className="py-2 px-3">Risk Score</th>
              <th className="py-2 px-3">Status</th>
              <th className="py-2 px-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {complaints.map((c, i) => (
              <tr key={i} className="border-b hover:bg-gray-50">
                <td className="py-2 px-3">{c.id}</td>
                <td className="py-2 px-3 flex items-center gap-2">
                  <span
                    className={`w-7 h-7 flex items-center justify-center rounded-full text-xs font-semibold ${c.customer.color}`}
                  >
                    {c.customer.initials}
                  </span>
                  <div>
                    <div className="font-medium">{c.customer.name}</div>
                    <div className="text-xs text-gray-500">
                      ID: {c.customer.id}
                    </div>
                  </div>
                </td>
                <td className="py-2 px-3">
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${c.categoryColor}`}
                  >
                    {c.category}
                  </span>
                </td>
                <td className="py-2 px-3 flex items-center gap-2">
                  <img
                    src={c.agent.img}
                    alt="agent"
                    className="w-6 h-6 rounded-full"
                  />
                  <div>
                    <div>{c.agent.name}</div>
                    <div className="text-xs text-gray-500">
                      ID: {c.agent.id}
                    </div>
                  </div>
                </td>
                <td className="py-2 px-3">
                  {c.date}
                  <div className="text-xs text-gray-500">{c.time}</div>
                </td>
                <td className="py-2 px-3">
                  <div className="flex items-center gap-1">
                    <span
                      className={`font-semibold ${
                        c.score > 70
                          ? "text-red-600"
                          : c.score > 50
                          ? "text-yellow-600"
                          : "text-green-600"
                      }`}
                    >
                      {c.score}%
                    </span>
                    <div className="h-1 w-16 bg-gray-200 rounded-full">
                      <div
                        className={`h-1 rounded-full ${
                          c.score > 70
                            ? "bg-red-500"
                            : c.score > 50
                            ? "bg-yellow-400"
                            : "bg-green-500"
                        }`}
                        style={{ width: `${c.score}%` }}
                      ></div>
                    </div>
                  </div>
                </td>
                <td className="py-2 px-3">
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${c.statusColor}`}
                  >
                    {c.status}
                  </span>
                </td>
                <td className="py-2 px-3 space-x-2">
                  <button className="text-blue-500 hover:underline text-xs">
                    <Eye size={16} className="cursor-pointer" />
                  </button>
                  <button className="text-gray-500 hover:underline text-xs">
                    <ChartSpline size={16} className="cursor-pointer" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer Buttons */}
      <div className="flex justify-between items-center mt-4 text-sm">
        <span>Showing 1 to 5 of 87 complaints</span>
        <div className="flex gap-2">
          <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
            Export Data
          </button>
          <button className="border px-3 py-1 rounded">Generate Report</button>
          <button className="border px-3 py-1 rounded">Set Alert</button>
        </div>
      </div>
    </div>
  );
};
export default ComplaintAnalysis;
