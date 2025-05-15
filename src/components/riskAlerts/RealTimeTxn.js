import { Pencil, Trash2 } from "lucide-react";
const RealTimeTxn = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-gray-800">
          Real-time Transaction Approval Rules
        </h3>
        <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm">
          + Add Rule
        </button>
      </div>
      <table className="w-full text-sm text-left text-gray-600">
        <thead className="text-xs text-gray-500 uppercase border-b">
          <tr>
            <th className="px-3 py-2">Rule Name</th>
            <th className="px-3 py-2">Condition</th>
            <th className="px-3 py-2">Action</th>
            <th className="px-3 py-2">Priority</th>
            <th className="px-3 py-2">Status</th>
            <th className="px-3 py-2">Last Modified</th>
            <th className="px-3 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {[
            [
              "High Risk Auto-Decline",
              "Risk Score > 85%",
              "Auto-decline transaction",
              1,
              "Active",
              "Apr 20, 2025",
            ],
            [
              "Medium Risk Review",
              "Risk Score 60-85%",
              "Flag for manual review",
              2,
              "Active",
              "Apr 18, 2025",
            ],
            [
              "Low Risk Auto-Approve",
              "Risk Score < 60%",
              "Auto-approve transaction",
              3,
              "Active",
              "Apr 15, 2025",
            ],
            [
              "Rapid Velocity Check",
              "> 5 transactions in 10 minutes",
              "Flag for review & increase risk score",
              4,
              "Active",
              "Apr 10, 2025",
            ],
            [
              "Geographic Risk",
              "Transaction from high-risk country",
              "Require additional verification",
              5,
              "Inactive",
              "Apr 5, 2025",
            ],
          ].map(([rule, cond, action, priority, status, date], idx) => (
            <tr key={idx} className="border-b">
              <td className="px-3 py-2 font-medium text-gray-800">{rule}</td>
              <td className="px-3 py-2">{cond}</td>
              <td className="px-3 py-2">{action}</td>
              <td className="px-3 py-2">{priority}</td>
              <td className="px-3 py-2">
                <span
                  className={`text-xs px-2 py-1 rounded-full font-medium ${
                    status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {status}
                </span>
              </td>
              <td className="px-3 py-2">{date}</td>
              <td className="px-3 py-2 space-x-2">
                {/* <button className="text-blue-600 hover:underline">✎</button>
                <button className="text-red-600 hover:underline">🗑</button> */}
                <button className="text-blue-600 hover:text-blue-800">
                  <Pencil className="w-4 h-4" />
                </button>
                <button className="text-red-600 hover:text-red-800 ml-2">
                  <Trash2 className="w-4 h-4" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RealTimeTxn;
