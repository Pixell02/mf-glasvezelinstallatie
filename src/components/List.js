import React from 'react'
import "./List.css"

export default function List({ children }) {
  return (
    <div className='list-content mt-4'>
      {children}
    </div>
  )
}
