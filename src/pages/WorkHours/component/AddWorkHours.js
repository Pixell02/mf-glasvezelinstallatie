import React, { useState } from 'react'

export default function AddWorkHours() {
   const date = new Date(Date.now())
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const formattedDate = `${year}-${month}-${day}`;
  const [today, setToday] = useState(new Date().toISOString().substr(0, 10));
  const [workHours, setWorkHours] = useState({
    day: formattedDate,
    start: "",
    end: ""
  })
 

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

 
  
  return (
    <div className='add-work-hours-container'>
      <h3>Godziny pracy</h3>
      <input type="date" value={today} />
      <div className='work-hours mt-3'>
        <div>Rozpoczęcie</div>
        <input type='time' value={workHours.start} onChange={handleStartChange}/>
        <div>Koniec</div>
        <input type='time' value={workHours.end} onChange={handleEndChange} />
      </div>
      <div className='btn-container mt-3'>
      <button className='btn btn-warning'>Dodaj</button>
      </div>
    </div>
  )
}
