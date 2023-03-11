import React, { useEffect, useState } from 'react'
import { useScaleTextArea } from '../hooks/useScaleTextArea'
import IdColumn from './IdColumn'
import PriceDimension from './PriceDimension'
import UnitDimension from './UnitDimension'
import DescriptionDimension from './DescriptionDimension'
import TotalDimension from './TotalDimension'
import PiecesDimension from './PIecesDimension'

export default function AddRow({idNumber, number}) {
  const [newArray,setNewArray] = useState(Array(number).fill())
  const {text, textAreaHeight, handleTextChange} = useScaleTextArea();
  useEffect(() => {
    setNewArray(Array(number).fill())
  },[number])

  return (
    <>
    {newArray && newArray.map((number, i) => (
      <tr className="d-flex h-100" style={{borderTop:"1px solid black"}}>
      <IdColumn>
              {`${idNumber}`}{(i+1).toString().padStart(3, '0')}
         </IdColumn>
          <DescriptionDimension>
            <textarea id='textArea' value={text[i]} onChange={(e) =>handleTextChange(e.target.value, i)} style={{ minWidth: "300px", height: textAreaHeight}}></textarea>
          </DescriptionDimension>
          <PiecesDimension></PiecesDimension>
          <UnitDimension></UnitDimension>
          <PriceDimension></PriceDimension>
          <TotalDimension></TotalDimension>
          
    </tr>
    ))}
    
    </>
  )
}
