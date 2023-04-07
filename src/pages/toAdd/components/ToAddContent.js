import React from 'react'
import ToAddBlock from './ToAddBlock'

export default function ToAddContent({projectInfo}) {
  return (
    <div className='mt-3'>
      <h3>Do dodania</h3>
      <ToAddBlock projectInfo={projectInfo} />
    </div>
  )
}
