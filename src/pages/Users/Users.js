import React from 'react'
import Navbar from '../../components/Navbar'
import LeftBar from '../../components/LeftBar'
import MainContent from '../../components/MainContent'
import UserInformation from './component/UserInformation'
export default function Users() {
  return (
    <div className='w-100 h-100'>
      <Navbar />
      <div className='d-flex flex-row'>
      <LeftBar />
      <div className='d-flex justify-content-start w-100 h-100 mt-5'>
        <MainContent>
          <UserInformation />
        </MainContent>
      </div>
      </div>
    </div>
  )
}
