import React, { useContext } from "react";
import "./FaxCost.css";
import AddRow from "./FaxCostComponents/AddRow";
import IdColumn from "./FaxCostComponents/IdColumn";
import LeftHeader from "./FaxCostComponents/LeftHeader";
import PriceDimension from "./FaxCostComponents/PriceDimension";
import RightHeader from "./FaxCostComponents/RightHeader";
import Row from "./FaxCostComponents/Row";
import { useAddDimension } from "./hooks/useAddDimension";
import { useDate } from "./hooks/useDate";
import UnitDimension from "./FaxCostComponents/UnitDimension";
import DescriptionDimension from "./FaxCostComponents/DescriptionDimension";
import TotalDimension from "./FaxCostComponents/TotalDimension";
import { useData } from "./hooks/useData";
import { AddDoc } from "../../../../hooks/useAddDoc";
import { useParams } from "react-router";
import { CostContext } from "../../../toAdd/Context/CostContext";

export default function FaxCost({ name, idNumber }) {
  const { date } = useDate();
  const params = useParams();
  const { price, setPrice } = useContext(CostContext);
  const { numberOfDimensions, handleAddDimension } = useAddDimension();
  const { handleAddData, data, toAddData, setDataArray } = useData(numberOfDimensions);

  const handleAddToDataBase = ({price, toAddData}) => {
    
    AddDoc("toAddData", price);
    AddDoc("fromAddData", toAddData);
  };

  return (
    <div className="d-flex w-100 justify-content-center">
      <div className="d-flex flex-column h-100 justify-content-center fax-cost-container">
        <div className="d-flex justify-content-end mb-2">
          <button
            onClick={() => handleAddToDataBase({price, toAddData})}
            className="btn btn-warning d-flex justify-content-center"
          >
            Zapisz
          </button>
        </div>
        <table className="border border-dark" style={{ width: "1000px" }}>
          <tr className="d-flex " style={{ borderBottom: "1px solid black" }}>
            <td className="border border-dark pt-5" style={{ width: "450px" }}>
              <LeftHeader handleAddData={handleAddData} />
            </td>
            <td className="d-flex w-100">
              <RightHeader name={name} date={date} handleAddData={handleAddData} data={data} />
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
          <AddRow setDataArray={setDataArray} idNumber={idNumber} number={numberOfDimensions} />
        </table>
        <button onClick={handleAddDimension} className="mt-2 btn btn-warning">
          Dodaj nowy wiersz
        </button>
      </div>
    </div>
  );
}
