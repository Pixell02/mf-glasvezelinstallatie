import React from 'react'

export default function ToAddBlock() {
  return (
    <div className='w-50 h-50 border border-dark rounded p-2'>
      <div className='project-container d-flex flex-row'>
        <div className='project-info d-flex flex-column w-100'>
         <div>E-mail:email@example.com</div>
         <div>Nazwa projektu: jakiś projekt</div>
         <div>typ: typ</div>
        </div>
        <div className='btn-container d-flex justify-content-center align-items-center'>
          <button className='btn btn-warning'>Przejdź</button>
        </div>
      </div>
    </div>
  )
}
