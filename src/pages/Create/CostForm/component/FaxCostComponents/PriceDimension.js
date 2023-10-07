import React from 'react'

export default function PriceDimension({children}) {
  return (
    <td className="d-flex justify-content-start align-items-center  w-100" style={{ borderLeft: "1px solid black" }}>
      {children}
    </td>
  )
}
