import React from 'react'
import LeftBar from '../../components/LeftBar'
import MainContent from '../../components/MainContent'
import Navbar from '../../components/Navbar'
import CreateContent from './component/CreateContent'

export default function Create() {
  return (
    <div>
      <Navbar />
      <div className='d-flex flex-row'>
        <LeftBar />
        <MainContent>
          <CreateContent />
        </MainContent>
      </div>
    </div>
  )
}
