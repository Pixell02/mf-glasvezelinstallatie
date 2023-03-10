import React from 'react'

export default function RightHeader({name, date}) {
  return (
    <div className="d-flex flex-column w-100 h-100">
    <div
      className="d-flex flex-row align-items-end justify-content-between"
      style={{ borderBottom: "1px solid black" }}
    >
      <b className="d-flex w-100 flex-row align-items-center justify-content-between">
        <h3>EH {name}</h3>
        <div>
          <span>Projectnummer:</span>
          <input type="text" className="input-item" />
        </div>
      </b>{" "}
    </div>
    <div className="d-flex flex-column justify-content-end">
      <b>
      <div className="d-flex justify-content-end w-100">
        <span>Naam project:</span>
        <input type="text" style={{width:"400px"}} />
      </div>
      <div className="d-flex justify-content-end  w-100">
        <span>Plaats:</span>
        <input type="text" style={{width:"400px"}} />
      </div>
      <div className="d-flex justify-content-end  w-100">
        <span>Datum:</span>
        <input value={date} type="text" style={{width:"400px"}} />
      </div>
      <div className="d-flex justify-content-end  w-100">
        <span>Contactpersoon:</span>
        <input type="text" style={{width:"400px"}} />
      </div>
      <div className="d-flex justify-content-end  w-100">
        <span>Crediteurencode:</span>
        <input type="text" style={{width:"400px"}} />
      </div>
      <div className="d-flex justify-content-end  w-100">
        <span>Crediteurnaam:</span>
        <input type="text" style={{width:"400px"}} />
      </div>
      </b>
    </div>
  </div>
  )
}
