const SentimentAnalysis = () => {
  return (
    <div className="bg-white p-4 rounded shadow border">
      <h2 className="text-md font-semibold mb-4">Sentiment Analysis</h2>

      {/* Circular chart */}
      <div className="relative w-24 h-24 mx-auto mb-4">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="48"
            cy="48"
            r="42"
            stroke="#e5e7eb"
            strokeWidth="10"
            fill="transparent"
          />
          <circle
            cx="48"
            cy="48"
            r="42"
            stroke="#ef4444"
            strokeWidth="10"
            fill="transparent"
            strokeDasharray="264"
            strokeDashoffset="106" // controls the visible portion
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-xl font-bold text-red-500">-28</div>
          <div className="text-xs text-gray-500">Net Score</div>
        </div>
      </div>

      {/* Breakdown */}
      <div className="text-sm space-y-2 mb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            Negative
          </div>
          <div>52 (60%)</div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            Neutral
          </div>
          <div>24 (28%)</div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            Positive
          </div>
          <div>11 (12%)</div>
        </div>
      </div>

      <hr className="mb-2" />
      <div className="text-sm">
        <a href="#" className="text-blue-600 hover:underline">
          View Sentiment Trends
        </a>
      </div>
    </div>
  );
};
export default SentimentAnalysis;
