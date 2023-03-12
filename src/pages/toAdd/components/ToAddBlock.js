import React from 'react'


const projectInfo = [{projectName: "jakis projekt", email: "email@example.com", type: "B&A"}]

export default function ToAddBlock() {
  return (
    <>
    {projectInfo && projectInfo.map((projectInfo) => (
     <div className='w-50 h-50 border rounded p-2'>
      <div className='project-container d-flex flex-row'>
        <div className='project-info d-flex flex-column w-100'>
         <div>E-mail: {projectInfo.email}</div>
         <div>Nazwa projektu: {projectInfo.projectName}</div>
         <div>typ: {projectInfo.type}</div>
        </div>
        <div className='btn-container d-flex justify-content-center align-items-center'>
          <button className='btn btn-warning'>Przejdź</button>
        </div>
      </div>
    </div> 
    ))}
    </>
  )
}
