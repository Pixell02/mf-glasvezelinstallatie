import React from 'react'

export default function ItemContainer({children}) {
  return (
    <div className='d-flex flex-row item-container'>
      {children}
    </div>
  )
}
