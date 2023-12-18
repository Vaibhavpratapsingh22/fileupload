import { CrossIcon, CrosshairIcon, File, FileUp, X } from "lucide-react";
import React from "react";

const UploadedFilePreview = ({ name, size, type, removeFile }) => {
  return (
    <div className="flex justify-between items-center mx-4 mt-5 border-2 border-white-500 rounded text-sm p-2">
      <div className="flex flex-row items-center">
        <FileUp className="bg-green-500 p-1 rounded"/>
        <div className="flex flex-col mx-2">
          {name}
          <div>
            {size}MB /<span className="ml-1">{type}</span>
          </div>
        </div>
      </div>
      <X className="cursor-pointer hover:text-red-600" onClick={removeFile}/>
    </div>
  );
};

export default UploadedFilePreview;
