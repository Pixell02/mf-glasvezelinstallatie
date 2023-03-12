import React from 'react'
import { useParams } from 'react-router'
import LeftBar from '../../../components/LeftBar'
import MainContent from '../../../components/MainContent';
import Navbar from '../../../components/Navbar'
import FaxCost from './component/FaxCost';

export default function CostForm() {
  const params = useParams();
  return (
    <div className='w-100 h-100'>
      <Navbar />
      <div className='d-flex flex-row w-100'>
        <LeftBar />
        <div className='d-flex justify-content-center align-items-center w-100 h-100 mt-5'>
        <MainContent>
          {params && params.id === "B&A" && (
            <FaxCost name="B&A" idNumber="B&A" />
          )}
          {params && params.id === "NB" && (
            <FaxCost name="NB" idNumber="NB" />
          )}
          {params && params.id === "Reconstructies" && (
            <FaxCost name="Reconstructies" idNumber="REC" />
          )}
          
        </MainContent>
        </div>
      </div>
    </div>
  )
}
