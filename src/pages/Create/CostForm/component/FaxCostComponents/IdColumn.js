import React from 'react'

export default function IdColumn({children}) {
  return (
    <td className='d-flex justify-content-start  w-100' style={{ minWidth: "200px" }}>
      <p className="d-flex w-100 h-100">
      {children}
      </p>
    </td>
  )
}
