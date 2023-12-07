import React from "react";
import { UserButton } from "@clerk/nextjs";

const Upload = () => {
  return (
    <div>
      Upload Page
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default Upload;
