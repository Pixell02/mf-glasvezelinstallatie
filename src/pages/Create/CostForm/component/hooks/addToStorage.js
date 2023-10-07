import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { useEffect, useState } from "react";
import { AddDoc } from "../../../../../hooks/useAddDoc";
import { useNavigate } from "react-router";

const addToStorage = ({ price, selectedFiles, toAddData }) => {
  const storage = getStorage();
  let urls = [];

  const uploadPromises = selectedFiles.map((file) => {
    const storageRef = ref(storage, `${price.uid}/` + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed', snapshot => {
      console.log("Uploaded", snapshot.totalBytes, "bytes.");
      console.log("File metadata:", snapshot.metadata);
    }, error => {
      console.error(error);
    });

    return uploadTask.then((snapshot) => {
      return getDownloadURL(snapshot.ref).then((url) => {
        urls.push(url);
        return url;
      });
    });
  });

  return Promise.all(uploadPromises)
    .then(downloadURLs => {
      const dataToAdd = { ...toAddData, photo: downloadURLs };
      console.log(dataToAdd);
      return AddDoc("fromAddData", dataToAdd);
    });
};



export default addToStorage;
