const paymentChannels = [
  { name: "Credit Card", volume: 45, value: 100 },
  { name: "Debit Card", volume: 30, value: 70 },
  { name: "Bank Transfer", volume: 15, value: 40 },
  { name: "Digital Wallet", volume: 10, value: 25 },
];
const PaymentChannelDis = () => {
  return (
    <div className="bg-white p-4 rounded shadow border">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-md font-semibold">Payment Channel Distribution</h2>
        <div className="flex gap-3 text-xs text-gray-600">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div> Volume
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div> Value
          </div>
        </div>
      </div>

      {paymentChannels.map((channel, idx) => (
        <div key={idx} className="mb-4">
          <div className="flex justify-between text-sm mb-1">
            <span>{channel.name}</span>
            <span>{channel.volume}%</span>
          </div>
          <div className="flex gap-1 items-center">
            <div
              className="h-2 bg-blue-500 rounded"
              style={{ width: `${channel.volume}%` }}
            ></div>
            <div
              className="h-2 bg-emerald-500 rounded"
              style={{ width: `${channel.value}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default PaymentChannelDis;
