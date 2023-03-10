import React from "react";
import "./FaxCost.css";
import Eenheid from "./FaxCostComponents/Eenheid";
import IdColumn from "./FaxCostComponents/IdColumn";
import LeftHeader from "./FaxCostComponents/LeftHeader";
import Omschrijving from "./FaxCostComponents/Omschrijving";
import Prijs from "./FaxCostComponents/Prijs";
import RightHeader from "./FaxCostComponents/RightHeader";
import Stuks from "./FaxCostComponents/Stuks";
import Totaal from "./FaxCostComponents/Totaal";
import { useDate } from "./hooks/useDate";

export default function FaxCost({ name, idNumber }) {
  const { date } = useDate();

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
        <tr
          className="d-flex flex-row border border-dark mt-3 mb-3"
          style={{ border: "1px solid black", backgroundColor: "rgba(220,220,220)" }}
        >
          <IdColumn>
          </IdColumn>
          <Omschrijving>
            <b>Omschrijving</b>
          </Omschrijving>
         <Eenheid>
            <b>Eenheid</b>
         </Eenheid>
          <Stuks>
            <b>Stuks</b>
          </Stuks>
          <Prijs>
            <b>Prijs</b>
          </Prijs>
          <Totaal>
            <b>Totaal</b>
          </Totaal>
        </tr>
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
        <tr className="d-flex h-100">
        <IdColumn>
              {`${idNumber}`}001
         </IdColumn>
          <Omschrijving>
            <textarea style={{ minWidth: "300px"}}></textarea>
          </Omschrijving>
          <Eenheid></Eenheid>
          <Stuks></Stuks>
          <Prijs></Prijs>
          <Totaal></Totaal>
        </tr>
      </table>
      <button className="mt-2 btn btn-warning">Dodaj nowy wiersz</button>
    </div>
  );
}
