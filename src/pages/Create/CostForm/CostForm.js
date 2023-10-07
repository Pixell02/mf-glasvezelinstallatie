import React, { useContext, useState } from 'react'
import { useParams } from 'react-router'
import LeftBar from '../../../components/LeftBar'
import MainContent from '../../../components/MainContent';
import Navbar from '../../../components/Navbar'
import FaxCost from './component/FaxCost';
import { CostContext } from '../../toAdd/Context/CostContext';
import { v4 as uuidv4 } from 'uuid';
import { useDate } from './component/hooks/useDate';
import { useAuthContext } from '../../../hooks/useAuthContext';


export default function CostForm() {
  const id = uuidv4();
  const {user} = useAuthContext();
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
    uid: id,
    user: user.uid
  });
  
  return (
    <CostContext.Provider value={{price, setPrice}}>
    <div className='w-75 h-100 d-flex position-absolute'>
      <Navbar />
      <div className='d-flex flex-row w-100'>
        <LeftBar />
        <div className='d-flex w-100 h-100'>
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
