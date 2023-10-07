import { useMediaQuery } from '@mui/material';
import React from 'react'
import "./itemContainer.css"

export default function ItemContainer({children}) {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return (
    <div className={isDesktop ? 'd-flex flex-wrap' : 'd-flex flex-wrap item-container'}>
      {children}
    </div>
  )
}
