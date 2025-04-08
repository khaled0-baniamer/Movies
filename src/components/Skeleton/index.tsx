import React from "react";

const Skeleton: React.FC = () => {
  return (
    <div className="p-4 w-full mx-auto bg-white rounded-lg">
      <div className="animate-pulse flex flex-col space-y-4">
        {/* Image skeleton */}
        <div className="w-full h-40 bg-gray-300 rounded-md"></div>

        {/* Title skeleton */}
        <div className="h-6 bg-gray-300 rounded-md w-3/4"></div>

        {/* Subtitle skeleton */}
        <div className="h-4 bg-gray-300 rounded-md w-1/2"></div>
      </div>
    </div>
  );
};

export default Skeleton;
