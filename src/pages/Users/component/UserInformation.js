import React from "react";
import { Calendar } from "react-calendar";
import List from "../../../components/List";
import AddUser from "./AddUser";
import { useCollection } from "../../../hooks/useCollection";
import WorkingHours from "./WorkingHours";
import "./userInformation.css"



export default function UserInformation() {

  const {documents: user} = useCollection("createdUsers")

  return (
    <div className="w-100">
      <AddUser />
      <h4 className="mt-5">Użytkownicy</h4>
      {user && user.map((user) => (
        <div className=" mt-5 w-75 users-container p-4 d-flex flex-row">
          <div className="user-data">
            <span>E-mail: {user.email}</span> 
            <span>Imie: {user.name}</span> 
            <span>Nazwisko: {user.surName}</span> 
          </div>
          <div className="calendar-container">
            <h3>Godziny pracy</h3>
            <WorkingHours userId={user.uid} />
          </div>
          
        </div>
      ))}
    </div>
  );
}
