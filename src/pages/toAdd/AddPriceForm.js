import React, { useContext, useEffect } from "react";
import { AddDoc } from "../../hooks/useAddDoc";
import "../Create/CostForm/component/FaxCost.css";
import AddRow from "../Create/CostForm/component/FaxCostComponents/AddRow";
import DescriptionDimension from "../Create/CostForm/component/FaxCostComponents/DescriptionDimension";
import IdColumn from "../Create/CostForm/component/FaxCostComponents/IdColumn";
import LeftHeader from "../Create/CostForm/component/FaxCostComponents/LeftHeader";
import PriceDimension from "../Create/CostForm/component/FaxCostComponents/PriceDimension";
import RightHeader from "../Create/CostForm/component/FaxCostComponents/RightHeader";
import Row from "../Create/CostForm/component/FaxCostComponents/Row";
import TotalDimension from "../Create/CostForm/component/FaxCostComponents/TotalDimension";
import UnitDimension from "../Create/CostForm/component/FaxCostComponents/UnitDimension";
import { useAddDimension } from "../Create/CostForm/component/hooks/useAddDimension";
import { useData } from "../Create/CostForm/component/hooks/useData";
import { CostContext, CostContextProvider } from "./Context/CostContext";

export default function AddPriceForm({ data, name, setData, handleAddData, toAddData,dataArray, setDataArray }) {
  const { price, setPrice } = useContext(CostContext);
 
  const handleAddToDataBase = (data, toAddData) => {
    AddDoc("toAddData", data);
    AddDoc("fromAddData", toAddData);
  };

  const { numberOfDimensions, handleAddDimension, setNumberOfDimensions } = useAddDimension();

  useEffect(() => {
    if (data) {
      setNumberOfDimensions(data.data.length);
    }
  }, [data]);
  
 
  return (
   
    <div className="d-flex w-100 justify-content-center">
      <div className="d-flex flex-column h-100 justify-content-center fax-cost-container">
        <div className="d-flex justify-content-end mb-2">
          <button
            onClick={() => handleAddToDataBase(data, toAddData)}
            className="btn btn-warning d-flex justify-content-center"
          >
            Zapisz
          </button>
        </div>
        <table className="border border-dark" style={{ width: "1000px" }}>
          <tr className="d-flex " style={{ borderBottom: "1px solid black" }}>
            <td className="border border-dark pt-5" style={{ width: "450px" }}>
              <LeftHeader data={data} handleAddData={handleAddData} />
            </td>
            <td className="d-flex w-100">
              <RightHeader data={data} handleAddData={handleAddData} />
            </td>
          </tr>
          <Row />
          <tr
            className="w-100 d-flex align-items-center"
            style={{ border: "1px solid black", backgroundColor: "rgba(220,220,220)" }}
          >
            <IdColumn></IdColumn>
            <td className="d-flex justify-content-start w-100" style={{ minWidth: "300px" }}>
              <b>Aansluitingen nieuwbouw</b>
            </td>
            <DescriptionDimension></DescriptionDimension>
            <UnitDimension></UnitDimension>
            <PriceDimension></PriceDimension>
            <TotalDimension></TotalDimension>
          </tr>
          <AddRow
            setDataArray={setDataArray}
            data={data}
            dataArray={dataArray}
            number={numberOfDimensions}
            idNumber={name}
            setData={setData}
          />
        </table>
        <button onClick={handleAddDimension} className="mt-2 btn btn-warning">
          Dodaj nowy wiersz
        </button>
      </div>
    </div>
   
  );
}
