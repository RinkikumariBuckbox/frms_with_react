const ComplaintCategories = () => {
  return (
    <div
      className="bg-white p-4 rounded shadow border"
      // className="space-y-6 mt-6"
    >
      <div
      //   className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-gray-800">
              Complaint Categories
            </h3>
          </div>
          {[
            {
              title: "Customer Service",
              level: "42 (48%)",
              color: "bg-yellow-500 w-4/5",
            },
            {
              title: "Product Quality",
              level: "28 (32%)",
              color: "bg-purple-400 w-3/5",
            },
            {
              title: "Billing Issues",
              level: "17 (20%)",
              color: "bg-orange-500 w-4/5",
            },
            {
              title: "Delivery Delays",
              level: "12 (14%)",
              color: "bg-blue-400 w-3/5",
            },
            {
              title: "Return Process",
              level: "8 (9%)",
              color: "bg-green-500 w-5/6",
            },
          ].map((risk, idx) => (
            <div key={idx} className="mb-4">
              <div className="flex justify-between text-sm font-medium">
                <span>{risk.title}</span>
                <span className="text-red-600 font-semibold">{risk.level}</span>
              </div>
              <div className="w-full bg-gray-200 h-1 rounded-full">
                <div className={`h-1 rounded-full  ${risk.color}`}></div>
              </div>
            </div>
          ))}

          <hr className="mb-2" />
          <div className="text-sm">
            <a href="#" className="text-blue-600 hover:underline">
              View Detailed Breakdown
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ComplaintCategories;
