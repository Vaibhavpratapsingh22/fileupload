"use client"
import React, { useState } from "react";
import { UserButton } from "@clerk/nextjs";
import UploadForm from "./_components/UploadForm";
import { app } from "@/firebaseConfig";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";


const Upload = () => {
  const storage = getStorage(app);
  const [progressValue, setProgressValue] = useState(0);
  
  const handleFileUploadBtn =(file)=>{
    const metadata = {
      contentType: file?.type
    };
    const storageRef = ref(storage, 'file-sharing/' + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);
    uploadTask.on('state_changed',
    (snapshot) => {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      setProgressValue(progress)
      switch (snapshot.state) {
        case 'paused':
          console.log('Upload is paused');
          break;
        case 'running':
          console.log('Upload is running');
          break;
      }
    }, 
    (error) => {
      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case 'storage/unauthorized':
          // User doesn't have permission to access the object
          break;
        case 'storage/canceled':
          // User canceled the upload
          break;
  
        // ...
  
        case 'storage/unknown':
          // Unknown error occurred, inspect error.serverResponse
          break;
      }
    }, 
    () => {
      // Upload completed successfully, now we can get the download URL
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log('File available at', downloadURL);
      });
    }
  );
  }
  return (
    <div>
      <h2 className="flex justify-center mt-5 text-lg p-10 text-[30px]">Start 
        <strong className="text-green-500 px-1"> Uploading </strong> Your <strong className="text-green-500 px-1"> Files </strong>  Here.
      </h2>
      <UploadForm handleFileUploadBtn={(file)=>handleFileUploadBtn(file)} progress={progressValue}/>
    </div>
  );
};

export default Upload;
