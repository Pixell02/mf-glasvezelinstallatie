import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./toAddBlock.css";
import download from "downloadjs";

export default function ToAddBlock({ projectInfo }) {
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(id);
  };

  const handlePhotoDownload = async (photos) => {
    try {
      const promises = photos.map(async (photo, i) => {
        const response = await fetch(photo, {
          mode: 'cors',
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
        });
        const blob = await response.blob();
        const fileReader = new FileReader();
        fileReader.readAsDataURL(blob);
        fileReader.onloadend = () => {
          const url = fileReader.result;
          const a = document.createElement("a");
          a.download = `zdjecie + ${i}.jpg`;
          a.href = url;
          
          a.click();
        };
      });
      await Promise.all(promises);
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <>
      {projectInfo &&
        projectInfo.map((projectInfo) => (
          <div className="project-container  w-100 border rounded p-2 mt-5">
            <div className="d-flex flex-row">
              <div className="project-info d-flex flex-column w-100">
                <div>E-mail: {projectInfo.email}</div>
                <div>Nazwa projektu: {projectInfo.projectName}</div>
                <div>Typ: {projectInfo.type}</div>
                <div>Data utworzenia: {projectInfo.Date}</div>
              </div>
              <div className="btn-container d-flex justify-content-center align-items-center mx-4">
                <button onClick={() => handleNavigate(projectInfo.uid)} className="btn btn-warning">
                  Przejdź
                </button>
              </div>
            </div>
            <div className="photo-container mt-2">
              <div className="d-flex w-100 ">
                <p>Zdjęcia </p>
                <div className="d-flex w-100 justify-content-end mx-4">
                  {/* <button
                    onClick={() => {
                      handlePhotoDownload(projectInfo.photo);
                    }}
                    className="btn btn-warning"
                  >
                    Pobierz
                  </button> */}
                </div>
              </div>
              {projectInfo.photo &&
                projectInfo.photo.map((photo) => (
                  <Link to={photo}>
                    <img src={photo} height="50px" />
                  </Link>
                ))}
            </div>
          </div>
        ))}
    </>
  );
}
