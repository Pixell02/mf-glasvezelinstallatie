import React from 'react'
import AddWorkHours from './AddWorkHours'
import Summary from './Summary'

export default function WorkHoursContainer() {
  return (
    <div className='d-flex flex-column justify-content-start align-items-start mt-5'>
      <AddWorkHours />
      <Summary />
    </div>
  )
}
