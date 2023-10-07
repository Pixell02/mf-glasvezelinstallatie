import React, { useEffect, useState } from 'react'
import { AddDoc } from '../../../hooks/useAddDoc';
import { useAuthContext } from '../../../hooks/useAuthContext';
import useMonthlyWorkingHours from '../hooks/useMonthlyWorkingHours';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../../firebase/config';

export default function AddWorkHours({isHoursAddedToday, todayWorkHours}) {
  const {user} = useAuthContext();
 
   const date = new Date(Date.now())
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const formattedDate = `${year}-${month}-${day}`;
  
  const [today, setToday] = useState(new Date().toISOString().substr(0, 10));
  const [workHours, setWorkHours] = useState({
    day: formattedDate,
    start: todayWorkHours ? todayWorkHours.start : "",
    end: todayWorkHours ? todayWorkHours.end :"",
    user: user.uid
  })

  useEffect(() => {
    setWorkHours(prev => ({
      ...prev,
      start: todayWorkHours.start,
      end: todayWorkHours.end
  }))
  },[todayWorkHours])

  const handleAddWorkingHours = (workHours) => {
    AddDoc("workHours", workHours)
  }

  const handleStartChange = (e) => {
    setWorkHours(prevState => ({
      ...prevState,
      start: e.target.value
    }))
  }
  const handleEndChange = (e) => {
    setWorkHours(prevState => ({
      ...prevState,
      end: e.target.value
    }))
  }
  const handleUpdateWorkingHours= (e, todayWorkHours, workHours) => {
    console.log(todayWorkHours)
    const docRef = doc(db, 'workHours', todayWorkHours.id)
    updateDoc(docRef, workHours)
  }

 
  
  return (
    <div className='add-work-hours-container'>
      <h3>Godziny pracy</h3>
      <input type="date" value={formattedDate} />
      <div className='work-hours mt-3'>
        <div>Rozpoczęcie</div>
        <input type='time' value={workHours.start} onChange={handleStartChange}/>
        <div>Koniec</div>
        <input type='time' value={workHours.end} onChange={handleEndChange} />
      </div>
      <div className='btn-container mt-3'>
      {!isHoursAddedToday  && <button onClick={() => handleAddWorkingHours(workHours)} className='btn btn-warning'>Dodaj</button>}
      {isHoursAddedToday && <button onClick={(e) => handleUpdateWorkingHours(e,todayWorkHours, workHours)} className='btn btn-warning' >Zmień</button>}
      </div>
    </div>
  )
}
