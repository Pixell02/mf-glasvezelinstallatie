import React from 'react'
import './projects.css'



export default function Projects({projectInfo}) {
  return (
    <div className="history-container mt-5">
    {projectInfo && projectInfo.map((projectInfo) => (
      <div className='project-container d-flex flex-row'>
      <div className='image-container d-flex w-50 justify-content-center align-items-center'>
        <img src={projectInfo.img} alt="tutaj bedzie obraz zapisanego pdfa" />
      </div>
      <div className='d-flex flex-column w-50'>
        <div className='d-flex justify-content-end w-100 p-3'>
          <button className='btn btn-warning w-25'>Edytuj</button>
        </div>
      <div className='project-informations-container d-flex flex-column justify-content-center mt-2'>
        <div className='create-date mb-2'>Data utworzenia: {projectInfo.createDate}</div>
        <div className='project-name mb-2'>Nazwa projektu: {projectInfo.projectName}</div>
        <div className='project-type mb-2'>Typ: {projectInfo.type}</div>
      </div>
    </div>
    </div>
    ))}
    </div>
  )
}
