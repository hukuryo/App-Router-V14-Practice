import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full border-t-4 border-blue-500 border-solid h-16 w-16"></div>
      <div className="ml-4 text-xl font-semibold text-gray-800">Loading...</div>
    </div>
  );
};

export default Loading;
