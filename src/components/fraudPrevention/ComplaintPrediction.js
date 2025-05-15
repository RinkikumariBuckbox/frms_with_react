const ComplaintPrediction = () => {
  return (
    <div className="bg-white p-4 rounded shadow border">
      <div className="flex justify-between items-start">
        <h3 className="font-semibold text-base">Complaint Prediction</h3>
        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">
          AI Powered
        </span>
      </div>
      <div className="mt-2 text-gray-700">
        <div className="flex justify-between mb-1">
          <span>Predicted Next 30 Days</span>
          <span className="font-medium">87 Complaints</span>
        </div>
        <div className="w-full h-2 bg-gray-200 rounded-full mb-4">
          <div
            className="h-2 bg-yellow-500 rounded-full"
            style={{ width: "43%" }}
          ></div>
        </div>
        <ul className="space-y-2">
          <li className="flex justify-between items-center">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-yellow-500 rounded-full inline-block"></span>
              Customer Service
            </span>
            <span className="font-medium">42 (48%)</span>
          </li>
          <li className="flex justify-between items-center">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full inline-block"></span>
              Product Quality
            </span>
            <span className="font-medium">28 (32%)</span>
          </li>
          <li className="flex justify-between items-center">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-orange-500 rounded-full inline-block"></span>
              Billing Issues
            </span>
            <span className="font-medium">17 (20%)</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default ComplaintPrediction;
