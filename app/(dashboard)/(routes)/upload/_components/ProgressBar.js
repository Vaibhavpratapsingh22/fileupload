import React from "react";

const ProgressBar = ({ progress  }) => {
  console.log(progress, "??????");
  return (
    <div className="flex justify-center items-center">
    <div className="w-[50%] h-4 mt-3 bg-gray-200 rounded-full">
      <div
        className="h-4 bg-green-500 rounded-full text-[12px]"
        style={{ width: `${progress}%` }}
      ><span className="mx-[1]">{`${Number(progress).toFixed(0)}%`}</span></div>
    </div>
    </div>
  );
};

export default ProgressBar;
