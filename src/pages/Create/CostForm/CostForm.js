import React from 'react'
import { useParams } from 'react-router'
import LeftBar from '../../../components/LeftBar'
import MainContent from '../../../components/MainContent';
import Navbar from '../../../components/Navbar'
import FaxCost from './component/FaxCost';

export default function CostForm() {
  const params = useParams();
  console.log(params)
  return (
    <div>
      <Navbar />
      <div className='d-flex flex-row'>
        <LeftBar />
        <div className='d-flex justify-content-center align-items-center w-100 h-100 mt-5'>
        <MainContent>
          <FaxCost name="Reconstructies" idNumber="REC" />
        </MainContent>
        </div>
      </div>
    </div>
  )
}
