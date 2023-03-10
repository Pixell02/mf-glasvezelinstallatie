import React from 'react'

export default function Prijs({children}) {
  return (
    <td className="d-flex justify-content-start  w-100" style={{ borderLeft: "1px solid black" }}>
      {children}
    </td>
  )
}
