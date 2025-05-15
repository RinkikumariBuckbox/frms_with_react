import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { month: "Jan", historical: 65, predicted: 0 },
  { month: "Feb", historical: 52, predicted: 0 },
  { month: "Mar", historical: 48, predicted: 0 },
  { month: "Apr", historical: 55, predicted: 0 },
  { month: "May", historical: 0, predicted: 68 },
  { month: "Jun", historical: 0, predicted: 78 },
  { month: "Jul", historical: 0, predicted: 85 },
];

const ChargebackTrendPrediction = () => {
  return (
    <div className="lg:col-span-2 bg-white p-4 rounded shadow border">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Chargeback Trend Prediction</h2>
        <div className="flex space-x-2 text-sm text-gray-500">
          <button className="bg-blue-100 text-blue-600 px-2 py-1 rounded">
            Monthly
          </button>
          <button>Weekly</button>
          <button>Daily</button>
        </div>
      </div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="historical" fill="#3B82F6" name="Historical Data" />
            <Bar
              dataKey="predicted"
              fill="#F87171"
              name="Predicted (85% confidence)"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="flex justify-center gap-6 mt-2 text-sm text-gray-600">
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div> Historical
          Data
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-red-400 rounded-full"></div> Predicted
        </div>
      </div>
    </div>
  );
};

export default ChargebackTrendPrediction;
