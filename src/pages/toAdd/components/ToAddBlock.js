import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ToAddBlock({ projectInfo }) {
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(id);
  };
  return (
    <>
      {projectInfo &&
        projectInfo.map((projectInfo) => (
          <div className="w-50 h-50 border rounded p-2 mt-5">
            <div className="project-container d-flex flex-row">
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
          </div>
        ))}
    </>
  );
}
