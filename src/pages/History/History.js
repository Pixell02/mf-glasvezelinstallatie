import React from 'react'
import LeftBar from '../../components/LeftBar'
import MainContent from '../../components/MainContent'
import Navbar from '../../components/Navbar'
import HistoryContent from './component/HIstoryContent'

export default function History() {
  return (
    <div className='w-100 h-100'>
      <Navbar/>
      <div className='d-flex flex-row'>
        <LeftBar />
        <div className='d-flex justify-content-start w-100'>
          <MainContent>
            <HistoryContent />
          </MainContent>
        </div>
      </div>
    </div>
  )
}
