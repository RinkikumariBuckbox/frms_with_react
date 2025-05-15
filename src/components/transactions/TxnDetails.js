const TxnDetails = () => {
  return (
    <div>
      <h3 className="text-sm font-semibold mb-2">Transaction Details</h3>
      <div className="text-sm text-gray-700">
        <div className="flex justify-between">
          <strong>Amount:</strong> $3,875.00 USD
        </div>
        <div className="flex justify-between">
          <strong>Payment Method:</strong> Visa ending in 4821
        </div>
        <div className="flex justify-between">
          <strong>IP Address:</strong> 102.89.23.156
        </div>
        <div className="flex justify-between">
          <strong>Device:</strong> iPhone 14 (iOS 18.2)
        </div>
        <div className="flex justify-between">
          <strong>Browser:</strong> Safari 18.0
        </div>
        <div className="flex justify-between">
          <strong>Order Contains:</strong> Electronics (3 items)
        </div>
        <div className="flex justify-between border-t-2 mt-4">
          <strong className="mt-3">Shipping Address:</strong>{" "}
          <span className="text-red-600 mt-3">Mismatch with billing</span>
        </div>
        <div>
          24 Broad Street
          <br />
          Lagos, 100001
          <br />
          Nigeria
        </div>
      </div>
    </div>
  );
};

export default TxnDetails;
