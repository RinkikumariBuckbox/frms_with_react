const AgentPerformance = () => {
  return (
    <div className="bg-white p-4 rounded shadow border">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-md font-semibold">Agent Performance</h2>
        <div className="flex gap-2">
          <select className="text-sm border rounded px-2 py-1 text-gray-600">
            <option>All Agents</option>
          </select>
          <select className="text-sm border rounded px-2 py-1 text-gray-600">
            <option>By Efficiency</option>
          </select>
        </div>
      </div>
      <div className="flex items-center gap-3 mb-2">
        <img
          src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg"
          className="w-8 h-8 rounded-full"
          alt="John Smith"
        />
        <span className="text-sm font-medium">John Smith</span>
      </div>
      <div className="h-2 bg-gray-200 rounded mb-1">
        <div
          className="h-2 bg-emerald-500 rounded"
          style={{ width: "98.2%" }}
        ></div>
      </div>
      <div className="text-xs text-right text-emerald-600">98.2%</div>
    </div>
  );
};
export default AgentPerformance;
