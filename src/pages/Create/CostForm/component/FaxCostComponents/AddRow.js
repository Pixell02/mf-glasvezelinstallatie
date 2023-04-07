import React, { useContext, useEffect, useState } from "react";
import { useScaleTextArea } from "../hooks/useScaleTextArea";
import IdColumn from "./IdColumn";
import PriceDimension from "./PriceDimension";
import UnitDimension from "./UnitDimension";
import DescriptionDimension from "./DescriptionDimension";
import TotalDimension from "./TotalDimension";
import PiecesDimension from "./PIecesDimension";
import { useData } from "../hooks/useData";
import { useParams } from "react-router";
import { CostContext } from "../../../../toAdd/Context/CostContext";

export default function AddRow({ idNumber, number, setDataArray, data, dataArray }) {
  const [newArray, setNewArray] = useState(Array(number ? number : data.data.length).fill());
  const { text, setText, textAreaHeight, handleTextChange } = useScaleTextArea({ number });
  const params = useParams();
  const { price, setPrice } = useContext(CostContext);

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
          {params.id !== "B&A" && params.id !== "NB" && params.id !== "Reconstructies" && (
            <>
              <PiecesDimension></PiecesDimension>
              <UnitDimension></UnitDimension>
              <PriceDimension>
                <input
                  type="text"
                  className="price"
                  value={price && price.data && price.data[i].price}
                  onChange={(e) => handleTextChange(e.target.value, e.target.className, i)}
                  style={{ width: "110px", height: textAreaHeight[i] }}
                />
              </PriceDimension>
              <TotalDimension></TotalDimension>
            </>
          )}
        </tr>
      ))}
    </>
  );
}
