import React from "react";
import {
  Search,
  Filter,
  UserPlus,
  ArrowUpDown,
  RotateCcw,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const AgentManageTools = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white rounded-lg shadow p-4 space-y-4">
      <div className="flex justify-between items-center flex-wrap gap-2">
        <h2 className="text-lg font-semibold">Agent Management Tools</h2>
        <div className="flex gap-2">
          <button  onClick={() => navigate("/agent-onboarding")} className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm">
            <UserPlus size={16} />
            Add New Agent
          </button>
          <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded text-sm hover:bg-gray-100">
            <Filter size={16} />
            Filters
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Quick Search */}
        <div className="border rounded p-4">
          <label className="flex items-center gap-2 font-medium mb-2 text-sm text-gray-700">
            <Search size={16} />
            Quick Search
          </label>
          <input
            type="text"
            placeholder="Search by name, ID or email..."
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300 text-sm"
          />
        </div>

        {/* Risk Sorting */}
        <div className="border rounded p-4">
          <label className="flex items-center gap-2 font-medium mb-2 text-sm text-gray-700">
            <ArrowUpDown size={16} />
            Risk Sorting
          </label>
          <select className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring focus:border-blue-300">
            <option>Sort by highest risk score</option>
            <option>Sort by lowest risk score</option>
            <option>Sort alphabetically</option>
          </select>
        </div>

        {/* Time Period */}
        <div className="border rounded p-4">
          <label className="flex items-center gap-2 font-medium mb-2 text-sm text-gray-700">
            <RotateCcw size={16} />
            Time Period
          </label>
          <select className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring focus:border-blue-300">
            <option>Last 30 days</option>
            <option>Last 7 days</option>
            <option>Last 90 days</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default AgentManageTools;
