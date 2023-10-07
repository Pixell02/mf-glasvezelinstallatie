import React from 'react'
import Projects from './Projects'
import {useCollection} from "../../../hooks/useCollection"

export default function HistoryContent() {
  const {documents: projectInfo} = useCollection("history")
  return (
    <div className='mt-3'>
      <h3>Historia</h3>
      <Projects projectInfo = {projectInfo} />
    </div>
  )
}
