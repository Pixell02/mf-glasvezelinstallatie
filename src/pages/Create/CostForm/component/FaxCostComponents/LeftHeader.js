import React from "react";

export default function LeftHeader() {
  return (
    <div className="d-flex flex-column pt-5">
      <div className="d-flex justify-content-between">
        <b>Aannemer:</b>
        <span>MF Glasvezelmonteur</span>
      </div>
      <div className="d-flex justify-content-between">
        <b>AVS nummer:</b>
        <input type="text" style={{width: "150px"}} />
      </div>
    </div>
  );
}
