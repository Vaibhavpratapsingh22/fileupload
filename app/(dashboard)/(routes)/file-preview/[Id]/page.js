"use client";
import React, { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { app } from "@/firebaseConfig";
import Image from "./_components/Image";
import FileDetailsForm from "./_components/FileDetailsForm";
import Link from "next/link";
import { ArrowLeftCircle } from "lucide-react";
import GlobalApi from "@/app/_utils/GlobalApi";

const FilePreview = ({ params }) => {
  const db = getFirestore(app);
  const shortUrl = "https://shorturl.at/etHZ6";
  const [fileDetails, setFileDetails] = useState(null);
  const [urlCopied, setUrlCopied] = useState(false);
  const [emailValue, setEmailValue] = useState(null);
  const [passwordEntered, setPasswordEntered] = useState(null);
  useEffect(() => {
    getFileInfo();
  }, [params?.Id]);
  const handlePasswordSave = (password) => {
    setPasswordEntered(password);
  };
  const handleUrlCopy = (url) => {
    navigator.clipboard.writeText(url);
    setUrlCopied(true);
    setTimeout(() => setUrlCopied(false), 5000);
  };
  const handleEmailValue = (email) => {
    setEmailValue(email);
  };
  const getFileInfo = async () => {
    const docRef = doc(db, "files", params?.Id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setFileDetails(docSnap.data());
    } else {
      console.error("No such document!");
    }
  };
   return (
    <>
      <div className="m-3 h-[85vh] flex justify-center items-center">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
          <div className="h-96 rounded-lg p-10 flex justify-center border-2 border-gray-200">
            <Image imageUrl={fileDetails?.url} />
          </div>
          <div className="h-96 rounded-lg">
            <div className="mx-auto max-w-screen-xl px-4  sm:px-6 lg:px-8">
              <FileDetailsForm
                handlePasswordSave={handlePasswordSave}
                urlCopied={urlCopied}
                shortUrl={shortUrl}
                handleUrlCopy={handleUrlCopy}
                handleEmailValue={handleEmailValue}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilePreview;
