import React, { useContext } from "react";
import { CostContext } from "../../../../toAdd/Context/CostContext";

const rows = [
  { columnName: "Naam project:", className: "ProjectName" },
  { columnName: "Plaats:", className: "Place" },
  { columnName: "Datum:", className: "Date" },
  { columnName: "Contactpersoon:", className: "Contact" },
  { columnName: "Crediteurencode:", className: "CreditorCode" },
  { columnName: "Crediteurnaam:", className: "CreditorName" },
];

export default function RightHeader({ name, handleAddData, faxData }) {
  
  const {price, setPrice} = useContext(CostContext);
  
  return (
    
    <div className="d-flex flex-column w-100 h-100">
      <div
        className="d-flex flex-row align-items-end justify-content-between"
        style={{ borderBottom: "1px solid black" }}
      >
        <b className="d-flex w-100 flex-row align-items-center justify-content-between">
          <h3>EH {price && price.type}</h3>
          <div>
            <span>Projectnummer:</span>
            <input type="text" value={price.ProjectNumber} className="ProjectNumber" onChange={(e) => handleAddData(e.target.className, e.target.value)} />
          </div>
        </b>{" "}
      </div>

      <div className="d-flex flex-column justify-content-end">
        <b />
          {!faxData ? rows.map((row) => (
            <div className="d-flex justify-content-end w-100">
              <span>{row.columnName}</span>
              <input type="text" value={price[row.className]} className={row.className} onChange={(e) => handleAddData(e.target.className, e.target.value)} style={{ width: "400px" }} />
            </div>
          )) : rows.map((row) => (
            <div className="d-flex justify-content-end w-100">
              <span>{row.columnName}</span>
              <input type="text" value={faxData[0][row.className]} className={row.className} onChange={(e) => handleAddData(e.target.className, e.target.value)} style={{ width: "400px" }} />
            </div>
          )) }

      </div>
    </div>
  );
}
