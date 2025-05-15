import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegistrationSuccessModal() {
  const [copied, setCopied] = useState(false);
  const agentCode = "BC25478";
  const navigate = useNavigate();
  const handleCopy = () => {
    navigator.clipboard.writeText(agentCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="bg-green-100 p-3 rounded-full">
            <svg
              className="h-6 w-6 text-green-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-800">
            Agent Successfully Registered!
          </h2>
          <p className="text-sm text-gray-500">
            The agent has been registered and assigned a unique code.
          </p>
          <div className="w-full bg-gray-50 rounded-lg py-4 mt-2">
            <p className="text-xs text-gray-500">Agent Code</p>
            <p className="text-2xl font-semibold text-gray-800">{agentCode}</p>
          </div>
          <div className="flex w-full justify-between gap-3 mt-4">
            <button
              onClick={handleCopy}
              className="flex-1 border border-gray-300 text-sm rounded-md py-2 hover:bg-gray-100 transition"
            >
              {copied ? "Copied!" : "📋 Copy Code"}
            </button>
            <button
              onClick={() => navigate("/agent-profiles")}
              className="flex-1 bg-blue-600 text-white text-sm rounded-md py-2 hover:bg-blue-700 transition"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
