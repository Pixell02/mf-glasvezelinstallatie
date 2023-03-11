import React, { useState } from 'react'

export default function AddWorkHours() {
  const [today, setToday] = useState(new Date().toISOString().substr(0, 10));
  const date = new Date(Date.now())
  return (
    <div className='add-work-hours-container'>
      <h3>Godziny pracy</h3>
      <input type="date" value={today} />
      <div className='work-hours mt-3'>
        <div>Rozpoczęcie</div>
        <input />
        <div>Koniec</div>
        <input />
      </div>
    </div>
  )
}
