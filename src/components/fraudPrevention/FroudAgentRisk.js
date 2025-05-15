const FroudAgentRisk = () => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Agent Risk Profiles
        </h2>
        <p className="text-gray-500 text-sm">Dynamic updating enabled</p>
        <a href="#" className="text-sm text-blue-600 hover:underline">
          View All Agents
        </a>
      </div>
      <input
        type="text"
        placeholder="Search agents..."
        className="w-full border px-3 py-2 rounded mb-3 text-sm"
      />
      <ul className="space-y-3 text-sm">
        {[
          {
            name: "Michael Johnson",
            id: "AG-7824",
            color: "text-red-500",
            risk: "82%",
            flagged: 12,
            avatar:
              "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg",
          },
          {
            name: "Sarah Williams",
            id: "AG-4521",
            color: "text-yellow-500",
            risk: "56%",
            flagged: 7,
            avatar:
              "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg",
          },
          {
            name: "David Chen",
            id: "AG-3348",
            color: "text-green-500",
            risk: "24%",
            flagged: 2,
            avatar:
              "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg",
          },
          {
            name: "Emily Rodriguez",
            id: "AG-6192",
            color: "text-yellow-500",
            risk: "48%",
            flagged: 5,
            avatar:
              "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-7.jpg",
          },
        ].map((agent, idx) => (
          <li key={idx} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={agent.avatar}
                alt={agent.name}
                className="w-9 h-9 rounded-full"
              />
              <div>
                <div className="font-medium text-gray-800">{agent.name}</div>
                <div className="text-gray-500 text-xs">ID: {agent.id}</div>
              </div>
            </div>
            <div className="text-right">
              <div className={`text-sm ${agent.color}`}>
                Risk:{" "}
                <span className={`font-semibold ${agent.color}`}>
                  {agent.risk}
                </span>
              </div>
              <div className="text-xs text-gray-500">
                Flagged Transactions: {agent.flagged}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default FroudAgentRisk;
