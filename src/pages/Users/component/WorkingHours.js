import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import { useAuthContext } from "../../../hooks/useAuthContext";
import useMonthlyWorkingHours from "../../WorkHours/hooks/useMonthlyWorkingHours";

export default function WorkingHours(props) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [year, setYear] = useState(selectedDate.getFullYear());
  const [month, setMonth] = useState(selectedDate.getMonth());
  const { user } = useAuthContext();
  const userId = props.userId;
  

  useEffect(() => {
    setYear(selectedDate.getFullYear());
    setMonth(selectedDate.getMonth());
  }, [selectedDate]);

  const { monthlyWorkHours, totalHours } = useMonthlyWorkingHours(userId, year, month);

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
    <div>
      <Calendar
        value={selectedDate}
        onActiveStartDateChange={(date) => handleNextMonthClick(date)}
        tileContent={tileContent}
      />
      <div className="summary-container d-flex justify-content-end">
        <span className="d-flex align-items-end">Suma: {totalHours} godzin</span>
      </div>
    </div>
  );
}
