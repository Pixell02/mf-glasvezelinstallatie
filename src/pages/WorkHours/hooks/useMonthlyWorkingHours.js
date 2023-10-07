import { useEffect, useState } from "react";
import { useCollection } from "../../../hooks/useCollection";
import moment from "moment/moment";

const useMonthlyWorkingHours = (userId, year, month) => {
  const [monthlyWorkHours, setMonthlyWorkHours] = useState([]);
  const { documents: workHours } = useCollection("workHours", ["user", "==", userId]);
  useEffect(() => {
    if (workHours) {
      const filteredWorkHours = workHours.filter((hours) => {
        const hoursDate = new Date(hours.day);
        return hoursDate.getFullYear() === year && hoursDate.getMonth() === month;
      });

      setMonthlyWorkHours(filteredWorkHours);
    }
  }, [workHours, year, month]);
  
  const totalHours = monthlyWorkHours.reduce((total, hours) => {
    const start = moment(hours.start, "HH:mm").toDate();
    const end = moment(hours.end, "HH:mm").toDate();

    const hoursDiff = moment.duration(moment(end).diff(moment(start))).asHours();

    return total + Math.ceil(hoursDiff);
  }, 0);

  return { monthlyWorkHours, totalHours };
};

export default useMonthlyWorkingHours;
