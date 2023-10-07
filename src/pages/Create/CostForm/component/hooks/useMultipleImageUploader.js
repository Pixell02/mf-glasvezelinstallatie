import { useState } from "react";

function useMultipleImageUploader() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);

  const handleFileSelect = (event) => {
    const files = event.target.files;
    const selectedFilesArray = [...selectedFiles];
    const imagePreviewsArray = [...imagePreviews];
   
    for (let i = 0; i < files.length; i++) {
      selectedFilesArray.push(files[i]);

      const reader = new FileReader();
      reader.readAsDataURL(files[i]);
      reader.onload = () => {
        imagePreviewsArray.push(reader.result);
        setImagePreviews(imagePreviewsArray);
      };
    }

    setSelectedFiles(selectedFilesArray);
  };
 


  return { selectedFiles, imagePreviews, handleFileSelect};
}

export default useMultipleImageUploader;