import React from 'react'
import "./ItemBlock.css"
export default function ItemBlock({children}) {
  return (
    <div className='item-block'>
      {children}
    </div>
  )
}
