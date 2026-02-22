const StatsCard = ({ title, value }) => {
  return (
    <div className="border border-gray-200 rounded-xl p-4 min-w-[120px] text-center bg-white shadow-sm">
      <h4 className="mb-2 text-sm text-gray-500">{title}</h4>
      <p className="font-semibold text-xl text-gray-900">{value}</p>
    </div>
  );
};

export default StatsCard;