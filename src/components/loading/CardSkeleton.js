export const CardSkeleton = () => (
  <div className="animate-pulse space-y-4">
    <div className="h-8 bg-gray-700/50 rounded w-1/4"></div>
    <div className="space-y-3">
      <div className="h-4 bg-gray-700/30 rounded"></div>
      <div className="h-4 bg-gray-700/30 rounded w-5/6"></div>
    </div>
  </div>
);
