import React from "react";
import "./addUser.css";
import useAddUser from "./hooks/useAddUser";
import usePasswordGenerator from "./hooks/usePasswordGenerator";
import Users from "./Users";
import { useCollection } from "../../../hooks/useCollection";



export default function AddUser() {
  const { password } = usePasswordGenerator();
  const { handleEmailValue, handleAddUser } = useAddUser(password);
  const { documents: users } = useCollection("usersToAdd");
  return (
    <div className="add-user-container">
      <p>Dodaj użytkownika</p>
      <div className="d-flex flex-row">
        <input type="text" className="userEmail" onChange={(e) => handleEmailValue(e.target.value)} />
        <button onClick={handleAddUser} className="btn btn-warning">
          Dodaj
        </button>
      </div>
      <div className="d-flex flex-column user-account-container border rounded mt-2">
        {users && users.map((user) => <Users user={user} />)}
      </div>
    </div>
  );
}
