"use client";
import React, { useState } from "react";
import AlertMessage from "./AlertMessage";
import FilePreview from "./UploadedFilePreview";
import ProgressBar from "./ProgressBar";

const UploadForm = ({handleFileUploadBtn, progress}) => {
  const maxFileSize = 2000000;
  const [uploadFile, setUploadFile] = useState(null);
  const [enableUploadBtn, setEnableUploadBtn] = useState(false);
  const [showError, setShowError] = useState(false);
  const onFileSelect = (file) => {
    if (file && file?.size > maxFileSize) {
      setShowError(true);
      setEnableUploadBtn(false);

      return;
    }
    if (file && file?.size < maxFileSize) {
      setShowError(false);
      setEnableUploadBtn(true);
      setUploadFile(file);
    }
  };
  const removeFile = () => {
    setUploadFile(null)
    setEnableUploadBtn(false)
  }
  return (
    <>
      <div className="flex items-center justify-center w-full px-10">
        <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-white">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-green-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-lg md:text-2xl text-gray-500 dark:text-gray-400">
              <span className="font-semibold text-green-500">
                Click to upload
              </span>{" "}
              or drag and drop
            </p>
            <p className="text-xs text-green-700">
              SVG, PNG, JPG or GIF (MAX. 2MB)
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            onChange={(e) => {
              onFileSelect(e.target.files[0]);
            }}
          />
        </label>
      </div>
     
      <div>{uploadFile ? <FilePreview name={uploadFile?.name} size={(uploadFile?.size/1024/1024).toFixed(2)} type={uploadFile?.type} removeFile={removeFile} /> : null}</div>
      <div className="flex justify-center mt-5 items-center rounded-lg p-1 ">
        <button
          onClick={() => handleFileUploadBtn(uploadFile)}
          disabled={!enableUploadBtn || progress>0}
          className=" disabled:bg-gray-500 disabled:text-white inline-block rounded-md bg-white px-4 py-2 text-sm text-green-500 shadow-sm focus:relative hover:bg-green-500 hover:text-white"
        >
          Upload Files
        </button>
      </div>
      <div className="flex justify-center mt-3">
        {showError ? (
          <AlertMessage message={"Max size limit exceeded !"} />
        ) : null}
      </div>
      <div >
      {progress>0 ? <ProgressBar progress={progress}/> : null}  
      </div>
    </>
  );
};

export default UploadForm;
