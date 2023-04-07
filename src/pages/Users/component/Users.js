import React from "react";

export default function Users({user}) {
  return (
    <div className="d-flex flex-column w-100 overflow-auto">
      <div className="d-flex flex-row">
        <label>Email: {user.email}</label>
      </div>
      <div className="d-flex flex-row mt-1 border-bottom ">
        <label>hasło: {user.password}</label>
      </div>
    </div>
  );
}
