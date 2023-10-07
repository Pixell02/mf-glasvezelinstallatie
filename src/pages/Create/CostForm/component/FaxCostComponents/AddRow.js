import React, { useContext, useEffect, useState } from "react";
import { useScaleTextArea } from "../hooks/useScaleTextArea";
import IdColumn from "./IdColumn";
import PriceDimension from "./PriceDimension";
import UnitDimension from "./UnitDimension";
import DescriptionDimension from "./DescriptionDimension";
import TotalDimension from "./TotalDimension";
import PiecesDimension from "./PIecesDimension";
import { useParams } from "react-router";
import { CostContext } from "../../../../toAdd/Context/CostContext";
import CurrencyInput from "react-currency-input-field";

export default function AddRow({ idNumber, number, setDataArray, data, dataArray }) {
  const [newArray, setNewArray] = useState(Array(number ? number : data.data.length).fill());
  const { text, setText, textAreaHeight, handleAmountChange, handleTextChange } = useScaleTextArea({ number });
  const params = useParams();
  const { price, setPrice } = useContext(CostContext);
  const [totalPrice, setTotalPrice] = useState();
  

  useEffect(() => {
    setNewArray(Array(number).fill(newArray));
  }, [number]);

  useEffect(() => {
    if (params.id !== "B&A" && params.id !== "NB" && params.id !== "Reconstructies") {
      setText(price.data);
    }
  }, []);
  
  return (
    <>
      {newArray.map((_, i) => (
        <tr className="d-flex h-100" style={{ borderTop: "1px solid black" }} key={i}>
          <IdColumn>{`${idNumber ? idNumber : price.type}${(i + 1).toString().padStart(3, "0")}`}</IdColumn>

          <DescriptionDimension>
            <textarea
              id={`textArea${i}`}
              className="description"
              value={price && price.data[i] && price.data[i].description}
              onChange={(e) => handleTextChange(e.target.value, e.target.className, i)}
              style={{ minWidth: "100%", height: textAreaHeight[i] }}
            ></textarea>
          </DescriptionDimension>
          <PiecesDimension>
            <input type="number" className="w-100" value={price && price.data[i] && price.data[i].amount} onChange={(e) => handleTextChange(e.target.value, e.target.className, i)} />
          </PiecesDimension>
          {params.id !== "B&A" && params.id !== "NB" && params.id !== "Reconstructies" && (
            <>
              
              <UnitDimension></UnitDimension>
              <PriceDimension>
                <CurrencyInput 
                  prefix="€" 
                  name="price"
                  className="price"
                  value={price.data[i].price ? price.data[i].price : 0}
                  onChange={(e) => handleTextChange(e.target.value, e.target.name, i)}
                />
                
              </PriceDimension>
              <TotalDimension>
                <CurrencyInput prefix="€" name="total" className="total w-100" style={{textAlign: "center"}} value={price.data[i].price ? price.data[i].price * price.data[i].amount : null} />
                
              </TotalDimension>
            </>
          )}
        </tr>
      ))}
    </>
  );
}
