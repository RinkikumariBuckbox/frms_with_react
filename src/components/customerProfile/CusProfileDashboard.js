import React from "react";

const CusProfileDashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
      {/* Dynamic Risk Profile */}
      <div className="bg-white p-4 rounded-2xl shadow">
        <h2 className="text-lg font-semibold mb-4">Dynamic Risk Profile</h2>
        <div className="mb-2">
          <p className="text-sm font-medium">Overall Risk Score</p>
          <div className="text-red-600 font-bold">91/100</div>
          <div className="h-2 bg-red-200 rounded-full">
            <div className="h-2 bg-red-600 rounded-full w-[91%]"></div>
          </div>
        </div>
        {[
          {
            label: "Transaction Patterns",
            risk: "High Risk (95%)",
            color: "red",
            width: "95%",
          },
          {
            label: "Location Variability",
            risk: "High Risk (88%)",
            color: "red",
            width: "88%",
          },
          {
            label: "Payment Methods",
            risk: "Medium Risk (65%)",
            color: "yellow",
            width: "65%",
          },
          {
            label: "Account Age",
            risk: "Low Risk (25%)",
            color: "green",
            width: "25%",
          },
          {
            label: "Verification Status",
            risk: "Medium Risk (58%)",
            color: "yellow",
            width: "58%",
          },
        ].map((item, idx) => (
          <div key={idx} className="mb-2">
            <p className="text-sm font-medium">{item.label}</p>
            <div className={`text-${item.color}-600 text-sm font-semibold`}>
              {item.risk}
            </div>
            <div className={`h-2 bg-${item.color}-200 rounded-full`}>
              <div
                className={`h-2 bg-${item.color}-500 rounded-full`}
                style={{ width: item.width }}
              ></div>
            </div>
          </div>
        ))}
        <h3 className="text-sm font-semibold mt-4">Risk Score History</h3>
        <div className="flex items-end space-x-1 mt-2">
          {["h-6", "h-6", "h-7", "h-8", "h-10", "h-12"].map((h, i) => (
            <div
              key={i}
              className={`w-4 ${h} ${
                i < 2 ? "bg-yellow-500" : "bg-red-500"
              } rounded`}
            ></div>
          ))}
        </div>
        <div className="text-xs text-gray-500 mt-1 flex justify-between">
          <span>Feb 2025</span>
          <span>Apr 2025</span>
        </div>
      </div>

      {/* Chargeback Prediction */}
      <div className="bg-white p-4 rounded-2xl shadow">
        <h2 className="text-lg font-semibold mb-4">Chargeback Prediction</h2>
        <div className="flex items-center justify-center mb-2">
          <div className="w-24 h-24 rounded-full border-4 border-red-500 flex items-center justify-center text-xl font-bold text-red-600">
            78%
          </div>
        </div>
        <p className="text-center text-sm mb-4">
          High likelihood of chargeback in next 30 days
        </p>
        <ul className="text-sm space-y-1 mb-4">
          <li className="text-red-600">
            ● Card Not Present <span className="float-right">82%</span>
          </li>
          <li className="text-blue-600">
            ● Product Not Received <span className="float-right">65%</span>
          </li>
          <li className="text-green-600">
            ● Product Not as Described <span className="float-right">42%</span>
          </li>
        </ul>
        <h3 className="text-sm font-semibold mb-2">Recommended Actions</h3>
        <ul className="text-sm space-y-1 text-green-700">
          <li>✔ Implement 3D Secure for all transactions</li>
          <li>✔ Request additional verification for purchases over $500</li>
          <li>✔ Flag for manual review before shipping</li>
        </ul>
      </div>

      {/* Complaint Prediction */}
      <div className="bg-white p-4 rounded-2xl shadow">
        <h2 className="text-lg font-semibold mb-4">Complaint Prediction</h2>
        <div className="flex items-center justify-center mb-2">
          <div className="w-24 h-24 rounded-full border-4 border-yellow-500 flex items-center justify-center text-xl font-bold text-yellow-600">
            62%
          </div>
        </div>
        <p className="text-center text-sm mb-4">
          Medium likelihood of complaint in next 30 days
        </p>
        <ul className="text-sm space-y-1 mb-4">
          <li className="text-orange-500">
            ● Customer Service <span className="float-right">75%</span>
          </li>
          <li className="text-purple-600">
            ● Product Quality <span className="float-right">58%</span>
          </li>
          <li className="text-yellow-600">
            ● Billing Issues <span className="float-right">47%</span>
          </li>
        </ul>
        <h3 className="text-sm font-semibold mb-2">Recommended Actions</h3>
        <ul className="text-sm space-y-1 text-green-700">
          <li>✔ Provide proactive customer service outreach</li>
          <li>✔ Send detailed product information before shipping</li>
          <li>✔ Ensure clear billing descriptions on statements</li>
        </ul>
      </div>
    </div>
  );
};

export default CusProfileDashboard;
