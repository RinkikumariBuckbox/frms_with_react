const TxnCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div className="p-4 bg-white rounded-xl shadow border">
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-500">Transactions Today</p>
          <span className="text-xs text-blue-600">Live</span>
        </div>
        <h2 className="text-2xl font-semibold ">
          1,247 <span className="text-xs text-green-500">↑ 8</span>
        </h2>
        <p className="text-xs text-gray-400">Compared to yesterday</p>
      </div>
      <div className="p-4 bg-white rounded-xl shadow border">
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-500">Approval Rate</p>
          <span className="text-xs text-green-500">Good</span>
        </div>
        <h2 className="text-2xl font-semibold">
          94.3% <span className="text-xs text-green-500">↑ 1.2%</span>
        </h2>
        <p className="text-xs text-gray-400">Compared to last week</p>
      </div>
      <div className="p-4 bg-white rounded-xl shadow border ">
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-500">Pending Reviews</p>
          <span className="text-xs text-yellow-500">Attention</span>
        </div>
        <h2 className="text-2xl font-semibold">
          37 <span className="text-xs text-red-500">↑ 15%</span>
        </h2>
        <p className="text-xs text-gray-400">Requires manual review</p>
      </div>

      <div className="p-4 bg-white rounded-xl shadow border">
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-500">Avg. Decision Time</p>
          <span className="text-xs text-green-500">Fast</span>
        </div>
        <h2 className="text-2xl font-semibold ">
          1.2s <span className="text-xs text-green-500">↓ 0.3s</span>
        </h2>
        <p className="text-xs text-gray-400">Compared to last month</p>
      </div>
    </div>
  );
};

export default TxnCard;
