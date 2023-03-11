import React from "react";
import List from "../../../components/List";
import AddUser from "./AddUser";

export default function UserInformation() {
  return (
    <div className="w-100">
      <AddUser />
      <h4 className="mt-5">Użytkownicy</h4>
      <div className=" w-100 users-container">
       <div><label>E-mail</label></div>

      </div>
    </div>
  );
}
