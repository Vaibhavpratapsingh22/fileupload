import React, { useState } from "react";
import GlobalApi from "@/app/_utils/GlobalApi";

const FileDetailsForm = ({
  handlePasswordSave,
  urlCopied,
  shortUrl,
  handleUrlCopy,
  handleEmailValue,
}) => {
  const [password, setPassword] = useState(null);
  const sendEmail = async () => {
    const data = {
      hell: "vaibhav",
      set: "king",
    };
    const response = await GlobalApi.SendEmail();
  };
  return (
    <div className="mx-auto mb-0 mt-8 max-w-md space-y-4">
      <div>
        <div className="relative">
          <p className="text-gray-400 text-[12px] px-1">Short URL</p>
          <input
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-gray-400 text-sm shadow-sm"
            value={shortUrl}
          />

          <span className="absolute inset-y-0 end-0 grid place-content-center px-4 pt-4">
            {!urlCopied ? (
              <button
                onClick={() => {
                  handleUrlCopy(shortUrl);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-files"
                >
                  <path d="M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z" />
                  <path d="M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8" />
                  <path d="M15 2v5h5" />
                </svg>
              </button>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-copy-check"
              >
                <path d="m12 15 2 2 4-4" />
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
              </svg>
            )}
          </span>
        </div>
      </div>

      <div>
        <div className="relative">
          <p className="text-gray-400 text-[12px] px-1">Enter Password?</p>
          <div className="flex">
            <input
              type="password"
              className="w-[85%] rounded-lg mr-2 border-gray-200 p-4 pe-12 text-gray-600 text-sm shadow-sm"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {password ? (
              <button
                className="inline-block rounded-lg bg-blue-500 px-4 py-1 text-sm font-medium text-white"
                onClick={() => handlePasswordSave(password)}
              >
                Save
              </button>
            ) : null}
          </div>
        </div>
      </div>
      <div>
        <div className="relative">
          <p className="text-gray-400 text-[12px] px-1">Send File to Email</p>
          <input
            type="text"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-gray-600 text-sm shadow-sm"
            placeholder="example@example.com"
            onChange={(e) => handleEmailValue(e.target.value)}
          />
        </div>
      </div>

      <div className="flex items-center justify-center">
        <button
          className="inline-block rounded-lg bg-blue-500 px-10 py-3 text-sm font-medium text-white"
          onClick={() => sendEmail()}
        >
          Send Email
        </button>
      </div>
    </div>
  );
};

export default FileDetailsForm;
