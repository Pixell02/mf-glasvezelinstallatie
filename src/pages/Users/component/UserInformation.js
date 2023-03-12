import React from "react";
import { Calendar } from "react-calendar";
import List from "../../../components/List";
import AddUser from "./AddUser";

const user = [{ email: "jakisemail@example.com" }];


export default function UserInformation() {
  return (
    <div className="w-100">
      <AddUser />
      <h4 className="mt-5">Użytkownicy</h4>
      {user.map((user) => (
        <div className=" w-75 users-container p-4 d-flex flex-row">
          <div className="user-data w-50 h-100">
            <label>E-mail:</label> {user.email}
          </div>
          <div className="calendar-container">
            <h3>Godziny pracy</h3>
            <Calendar />
            <div className="summary-container d-flex justify-content-end">
              <span className="d-flex align-items-end">Suma: 20 godzin</span>
            </div>
          </div>
          
        </div>
      ))}
    </div>
  );
}
