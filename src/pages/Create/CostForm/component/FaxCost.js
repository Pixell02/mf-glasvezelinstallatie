import React from "react";
import "./FaxCost.css";
import AddRow from "./FaxCostComponents/AddRow";
import Eenheid from "./FaxCostComponents/Eenheid";
import IdColumn from "./FaxCostComponents/IdColumn";
import LeftHeader from "./FaxCostComponents/LeftHeader";
import Omschrijving from "./FaxCostComponents/Omschrijving";
import Prijs from "./FaxCostComponents/Prijs";
import RightHeader from "./FaxCostComponents/RightHeader";
import Row from "./FaxCostComponents/Row";
import Stuks from "./FaxCostComponents/Stuks";
import Totaal from "./FaxCostComponents/Totaal";
import { useAddDimension } from "./hooks/useAddDimension";
import { useDate } from "./hooks/useDate";

export default function FaxCost({ name, idNumber }) {
  const { date } = useDate();

  const {numberOfDimensions, handleAddDimension}=useAddDimension();

  return (
    <div className="d-flex flex-column w-100 h-100 justify-content-center">
      <div className="d-flex w-100 justify-content-end mb-2">
      <button className="btn btn-warning  d-flex justify-content-center">Zapisz</button>
      </div>
      <table className="border border-dark" style={{ width: "1000px" }}>
        <tr className="d-flex " style={{ borderBottom: "1px solid black" }}>
          <td className="border border-dark pt-5" style={{ width: "450px" }}>
            <LeftHeader />
          </td>
          <td className="d-flex w-100">
            <RightHeader name={name} date={date} />
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
          <Omschrijving></Omschrijving>
          <Eenheid></Eenheid>
          <Stuks></Stuks>
          <Prijs></Prijs>
          <Totaal></Totaal>
        </tr>
        <AddRow idNumber={idNumber} number={numberOfDimensions} />
      </table>
      <button onClick={handleAddDimension} className="mt-2 btn btn-warning">Dodaj nowy wiersz</button>
    </div>
  );
}
