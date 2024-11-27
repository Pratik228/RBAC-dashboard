export const TableSkeleton = () => (
  <div className="animate-pulse">
    <div className="h-8 bg-gray-700/50 rounded mb-4"></div>
    {[...Array(5)].map((_, i) => (
      <div key={i} className="h-16 bg-gray-700/30 rounded mb-2"></div>
    ))}
  </div>
);



