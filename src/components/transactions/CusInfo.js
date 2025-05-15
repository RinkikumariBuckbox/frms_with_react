const CusInfo = () => {
  return (
    <div>
      <h3 className="text-sm font-semibold mb-2">Customer Information</h3>
      <div className="flex items-center space-x-2 mb-2">
        <div className="w-10 h-10 rounded-full bg-green-100 text-green-800 flex items-center justify-center font-semibold">
          AP
        </div>
        <div>
          <div className="font-medium">Alex Patel</div>
          <div className="text-sm text-gray-500">Customer since Jan 2025</div>
        </div>
      </div>
      <div className="text-sm text-gray-700">
        <div className="flex justify-between">
          <strong>Customer ID:</strong> CU-4827
        </div>
        <div className="flex justify-between">
          <strong>Email:</strong> alex.p@example.com
        </div>
        <div className="flex justify-between">
          <strong>Phone:</strong> +1 (555) 123-4567
        </div>
        <div className="flex justify-between">
          <strong>Location:</strong> Lagos, Nigeria
        </div>
        <div className="flex justify-between">
          <strong>Previous Transactions:</strong> 3
        </div>
      </div>
    </div>
  );
};
export default CusInfo;
