import React from 'react'
import './projects.css'
import { Link } from 'react-router-dom'

export default function Projects({projectInfo}) {

  
  return (
    <div className="history-container mt-5">
    {projectInfo && projectInfo.map((projectInfo) => (
      <div className='project-container d-flex flex-row'>
      <div className='image-container d-flex w-50 justify-content-center align-items-center'>
        <Link to={projectInfo.pdf}>
          <p style={{color: "black", fontSize: "25px"}}>Plik PDF</p>
          <p style={{color: "black", fontSize: "15px"}}>(do kliknięcia)</p>
        </Link>
      </div>
      <div className='d-flex flex-column w-50'>
        
      <div className='project-informations-container d-flex flex-column justify-content-center mt-2'>
        <div className='create-date mb-2'>Data utworzenia: {projectInfo.Date}</div>
        <div className='project-name mb-2'>Nazwa projektu: {projectInfo.projectName}</div>
        <div className='project-type mb-2'>Typ: {projectInfo.type}</div>
      </div>
      <div>
        <span>Zdjęcia</span>
        {projectInfo.photo.map(photo => (
          <img src={photo} height="20px" />
        ))}
        </div>
    </div>
    </div>
    ))}
    </div>
  )
}
