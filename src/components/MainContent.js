import React from 'react'
import "./mainContent.css"
export default function MainContent({children}) {
  return (
    <div className='main-content w-100'>
      {children}
    </div>
  )
}
