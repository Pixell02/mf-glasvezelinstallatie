import React, { useContext, useState } from 'react'
import { useParams } from 'react-router'
import LeftBar from '../../../components/LeftBar'
import MainContent from '../../../components/MainContent';
import Navbar from '../../../components/Navbar'
import FaxCost from './component/FaxCost';
import { CostContext } from '../../toAdd/Context/CostContext';
import { v4 as uuidv4 } from 'uuid';
import { useDate } from './component/hooks/useDate';

export default function CostForm() {
  const id = uuidv4();
  const { date } = useDate();
  const params = useParams();
  const [price, setPrice] = useState({
    type: params.id,
    AVSNumber: "",
    ProjectNumber: "",
    ProjectName: "",
    Place: "",
    Date: date,
    Contact: "",
    CreditorCode: "",
    CreditorName: "",
    data: [],
    uid: id
  });
  
  return (
    <CostContext.Provider value={{price, setPrice}}>
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
    </CostContext.Provider>
  )
}
