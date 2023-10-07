import React from 'react'
import LeftBar from '../../components/LeftBar'
import MainContent from '../../components/MainContent'
import Navbar from '../../components/Navbar'
import WorkHoursContainer from './component/WorkHoursContainer'

export default function WorkHours() {
  
  return (
    <div>
      <Navbar />
      <div className='d-flex flex-row'>
        <LeftBar />
        <div className='d-flex justify-content-start w-100 h-100'>
        <MainContent>
          <WorkHoursContainer />
        </MainContent>
        </div>
      </div>
    </div>
  )
}
