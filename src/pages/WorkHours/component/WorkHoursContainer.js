import React, { useEffect, useState } from 'react'
import AddWorkHours from './AddWorkHours'
import Summary from './Summary'
import { useAuthContext } from '../../../hooks/useAuthContext';
import useMonthlyWorkingHours from '../hooks/useMonthlyWorkingHours';

export default function WorkHoursContainer() {

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [year, setYear] = useState(selectedDate.getFullYear());
  const [month, setMonth] = useState(selectedDate.getMonth());
  const { user } = useAuthContext();
  const userId = user.uid;
  const [todayWorkHours, setTodayWorkHours] = useState({})
  useEffect(() => {
    setYear(selectedDate.getFullYear());
    setMonth(selectedDate.getMonth());
  }, [selectedDate]);


  const { monthlyWorkHours, totalHours } = useMonthlyWorkingHours(userId, year, month);

  const isHoursAddedToday = monthlyWorkHours.some((hours) => {
    const hoursDate = new Date(hours.day);
    const today = new Date();
    return (
      hoursDate.getDate() === today.getDate() &&
      hoursDate.getMonth() === today.getMonth() &&
      hoursDate.getFullYear() === today.getFullYear()
    );
  });
  useEffect(() => {
    if(isHoursAddedToday) {
      const todayHours = monthlyWorkHours.find((hours) => {
        const hoursDate = new Date(hours.day);
        const today = new Date();
        return (
          hoursDate.getDate() === today.getDate() &&
          hoursDate.getMonth() === today.getMonth() &&
          hoursDate.getFullYear() === today.getFullYear()
        );
      });
      console.log(todayHours)
      setTodayWorkHours(todayHours)
      
    }
  },[isHoursAddedToday])
  
 
  return (
    <div className='d-flex flex-column justify-content-start align-items-start mt-5'>
      { monthlyWorkHours  && selectedDate && (
        <>
        <AddWorkHours 
          isHoursAddedToday={isHoursAddedToday}
          todayWorkHours={todayWorkHours}
        />
      <Summary
        monthlyWorkHours={monthlyWorkHours} 
        totalHours={totalHours} 
        setSelectedDate={setSelectedDate} 
        selectedDate={selectedDate}
      />
      </>
      )}
    </div>
  )
}
