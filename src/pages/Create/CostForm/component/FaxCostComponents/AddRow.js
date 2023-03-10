import React, { useEffect, useState } from 'react'
import { useScaleTextArea } from '../hooks/useScaleTextArea'
import Eenheid from './Eenheid'
import IdColumn from './IdColumn'
import Omschrijving from './Omschrijving'
import Prijs from './Prijs'
import Stuks from './Stuks'
import Totaal from './Totaal'

export default function AddRow({idNumber, number}) {
  const [newArray,setNewArray] = useState(Array(number).fill())
  const {text, textAreaHeight, handleTextChange} = useScaleTextArea();
  useEffect(() => {
    setNewArray(Array(number).fill())
  },[number])

  return (
    <>
    {newArray && newArray.map((number, i) => (
      <tr className="d-flex h-100">
      <IdColumn>
              {`${idNumber}${i + 1}`}
         </IdColumn>
          <Omschrijving>
            <textarea id='textArea' value={text[i]} onChange={(e) =>handleTextChange(e.target.value, i)} style={{ minWidth: "300px", height: textAreaHeight}}></textarea>
          </Omschrijving>
          <Eenheid></Eenheid>
          <Stuks></Stuks>
          <Prijs></Prijs>
          <Totaal></Totaal>
          
    </tr>
    ))}
    
    </>
  )
}
