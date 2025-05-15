// RiskDashboard.jsx
import React from "react";
import RealTimeTxn from "./RealTimeTxn";
import TxnHistory from "./TxnHistory";
import RiskScore from "./RiskScore";
// import TransactionHistory from "./TransactionHistory";
// import ActiveRiskRules from "./ActiveRiskRules";

const RiskFactors = () => {
  return (
    <div className="space-y-6 mt-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Risk Factors */}
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-gray-800">Risk Factors</h3>
            <span className="text-sm text-gray-500">Auto-updated</span>
          </div>
          {[
            {
              title: "Transaction Velocity",
              level: "High Risk",
              desc: "Rapid transaction frequency detected",
              color: "bg-red-500 w-4/5",
            },
            {
              title: "Transaction Amount",
              level: "Medium Risk",
              desc: "Unusually large transaction amounts",
              color: "bg-yellow-400 w-3/5",
            },
            {
              title: "Geographic Location",
              level: "High Risk",
              desc: "Multiple countries in short timeframe",
              color: "bg-red-500 w-4/5",
            },
            {
              title: "Device Consistency",
              level: "Medium Risk",
              desc: "Multiple devices used for transactions",
              color: "bg-yellow-400 w-3/5",
            },
            {
              title: "Payment Method Variety",
              level: "High Risk",
              desc: "Multiple payment methods in short period",
              color: "bg-red-500 w-5/6",
            },
          ].map((risk, idx) => (
            <div key={idx} className="mb-4">
              <div className="flex justify-between text-sm font-medium">
                <span>{risk.title}</span>
                <span className="text-red-600 font-semibold">{risk.level}</span>
              </div>
              <div className="text-xs text-gray-500 mb-1">{risk.desc}</div>
              <div className="w-full bg-gray-200 h-1 rounded-full">
                <div className={`h-1 rounded-full ${risk.color}`}></div>
              </div>
            </div>
          ))}
        </div>
        <TxnHistory />
        <RiskScore />
      </div>
      <RealTimeTxn />
    </div>
  );
};

export default RiskFactors;
