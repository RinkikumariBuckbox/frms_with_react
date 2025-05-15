
function MetricCard({ title, value, note }) {
  return (
    <div className="border rounded-xl p-4 text-center">
      <p className="font-semibold mb-2">{title}</p>
      <p className="text-sm text-gray-700 mb-1">{value}</p>
      <p className="text-xs text-gray-500">{note}</p>
    </div>
  );
}
export default MetricCard;
