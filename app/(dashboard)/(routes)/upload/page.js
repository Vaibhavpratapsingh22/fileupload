"use client";
import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import UploadForm from "./_components/UploadForm";
import { app } from "../../../../firebaseConfig";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { randomString } from "../.././../_utils/GenerateRandomString";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

const Upload = () => {
  const uploadComplete = 100;
  const router =useRouter();
  const storage = getStorage(app);
  const db = getFirestore(app);
  const { user } = useUser();
  const [progressValue, setProgressValue] = useState(0);
  const [uploadFileId, setUploadFileId] = useState(null);

  const handleFileUploadBtn = (file) => {
    const metadata = {
      contentType: file?.type,
    };
    const storageRef = ref(storage, `file-sharing/${file?.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);
    let progress = 0;
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgressValue(progress);
        switch (snapshot.state) {
          case "paused":
            console.error("Upload is paused");
            break;
          case "running":
            console.error("Upload is running");
            break;
        }
      },
      (error) => {
        switch (error.code) {
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            break;
          case "storage/canceled":
            // User canceled the upload
            break;

          // ...

          case "storage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      },
      () => {
        if (progress == uploadComplete) {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            saveInfo(file, downloadURL);
          });
        }
      }
    );
  };

  useEffect(() => {
    if (uploadFileId) {
      router.push(`/file-preview/${uploadFileId}`);
    }
  }, [uploadFileId]);

  const saveInfo = async (file, fileUrl) => {
    const docId = randomString(4);
    setUploadFileId(docId);
    try {
      const response = await setDoc(doc(db, "files", docId), {
        id: docId,
        fileName: file?.name,
        fileSize: file?.size,
        fileType: file?.type,
        fileUrl: fileUrl,
        userEmail: user?.primaryEmailAddress?.emailAddress,
        userName: user?.fullName,
        password: "",
        shortUrl: `process.env.NEXT_PUBLIC_BASE_URL/${docId}`,
      });
      return response;
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h2 className="flex justify-center mt-5 text-lg p-10 text-[30px]">
        Start
        <strong className="text-green-500 px-1"> Uploading </strong> Your{" "}
        <strong className="text-green-500 px-1"> Files </strong> Here.
      </h2>
      <UploadForm
        handleFileUploadBtn={(file) => handleFileUploadBtn(file)}
        progress={progressValue}
      />
    </div>
  );
};

export default Upload;
