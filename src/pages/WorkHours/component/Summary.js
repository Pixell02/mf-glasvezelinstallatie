import React, { useState } from 'react'
import { Calendar } from 'react-calendar'
import "react-calendar/dist/Calendar.css"

export default function Summary() {


  const [selectedDate, setSelectedDate] = useState(new Date());
  const [workHours, setWorkHours] = useState([
    { day: "2023-03-11", start: "09:00", end: "17:00" },
    { day: "2023-03-12", start: "09:00", end: "13:00" },
    { day: "2023-03-14", start: "10:00", end: "18:00" },
    { day: "2023-02-13", start: "10:00", end: "14:00"}
  ]);

  // Filtrujemy godziny pracy na wybrany dzień
  const filteredWorkHours = workHours.filter(
    (hours) => hours.day === selectedDate.toISOString().slice(0, 10)
  );

  // Funkcja, która wyświetla godziny pracy na kalendarzu
  const tileContent = ({ date, view }) => {
    if (view === "month") {
      const day = date.toISOString().slice(0, 10);
      const workHoursForDay = workHours.find((hours) => hours.day === day);
      if (workHoursForDay) {
        return (
          <p>
            {workHoursForDay.start} - {workHoursForDay.end}
          </p>
        );
      }
    }
  };

  return (
    <div className='d-flex flex-column mt-5'>
      <h1>Kalendarz</h1>
      <Calendar
        value={selectedDate}
        onChange={setSelectedDate}
        tileContent={tileContent}
      />
      <div className='w-100 d-flex justify-content-end'>
      <h3>Suma: x godzin</h3>
      </div>
    </div>
  );
}
