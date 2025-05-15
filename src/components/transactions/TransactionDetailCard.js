import React from "react";
import RiskAssesment from "./RiskAssesment";
import TxnDetails from "./TxnDetails";
import CusInfo from "./CusInfo";

export default function TransactionDetailCard() {
  return (
    <div className="p-6 bg-white rounded-lg shadow border">
      <h2 className="text-lg font-semibold mb-4">Transaction Detail View</h2>
      <div className="bg-gray-50 p-4 rounded border">
        <div className="flex justify-between items-center mb-4">
          <div className="text-lg font-semibold">
            #TX-9382{" "}
            <span className="bg-red-100 text-red-600 text-xs font-medium ml-2 px-2.5 py-0.5 rounded">
              Declined
            </span>
          </div>
          <div className="text-sm text-gray-500">
            Apr 23, 2025 - 14:35:22 UTC
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Customer Information */}

          <CusInfo />
          <TxnDetails />
          <RiskAssesment />
        </div>
      </div>
    </div>
  );
}
