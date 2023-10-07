import React, { useEffect, useState } from "react";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import useMonthlyWorkingHours from "../hooks/useMonthlyWorkingHours";
import { useAuthContext } from "../../../hooks/useAuthContext";

export default function Summary({monthlyWorkHours, setSelectedDate, selectedDate, totalHours}) {

 

  const tileContent = ({ date, view }) => {
    
    if (view === "month") {
      const day = date.toISOString().slice(0, 10);
      const workHoursForDay = monthlyWorkHours.find((hours) => hours.day === day);
      if (workHoursForDay) {
        return (
          <p>
            {workHoursForDay.start} - {workHoursForDay.end}
          </p>
        );
      }
    }
  };

  const handleNextMonthClick = (date) => {
    setSelectedDate(new Date(date.activeStartDate));
  };
  return (
    <div className="d-flex flex-column mt-5">
      <h1>Kalendarz</h1>
      <Calendar
        value={selectedDate}
        onActiveStartDateChange={(date) => handleNextMonthClick(date)}
        tileContent={tileContent}
      />

      <div className="w-100 d-flex justify-content-end">
        <h3>Suma: {Math.ceil(totalHours)} godzin</h3>
      </div>
    </div>
  );
}
