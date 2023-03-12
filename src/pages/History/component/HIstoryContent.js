import React from 'react'
import Projects from './Projects'

const projectInfo = [{createDate: "11-03-2023", projectName: "Nazwa projektu", type:"B&A"}]

export default function HistoryContent() {
  return (
    <div className='mt-3'>
      <h3>Historia</h3>
      <Projects projectInfo = {projectInfo} />
    </div>
  )
}
