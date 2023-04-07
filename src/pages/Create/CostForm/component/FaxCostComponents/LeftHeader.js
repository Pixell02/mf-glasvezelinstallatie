import React, { useContext } from "react";
import { CostContext } from "../../../../toAdd/Context/CostContext";

export default function LeftHeader({handleAddData}) {

  const {price} = useContext(CostContext);
  
  return (
    <div className="d-flex flex-column pt-5">
      <div className="d-flex justify-content-between">
        <b>Aannemer:</b>
        <span>MF Glasvezelmonteur</span>
      </div>
      <div className="d-flex justify-content-between">
        <b>AVS nummer:</b>
        <input type="text" value={price ? price.AVSNumber : null} className="AVSNumber" onChange={(e) => handleAddData(e.target.className, e.target.value) } style={{width: "150px"}} />
      </div>
    </div>
  );
}
