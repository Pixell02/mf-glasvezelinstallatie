import React from "react";
import Eenheid from "./Eenheid";
import IdColumn from "./IdColumn";
import Omschrijving from "./Omschrijving";
import Prijs from "./Prijs";
import Stuks from "./Stuks";
import Totaal from "./Totaal";

export default function Row() {
  return (
    <tr
      className="d-flex flex-row border border-dark mt-3 mb-3"
      style={{ border: "1px solid black", backgroundColor: "rgba(220,220,220)" }}
    >
      <IdColumn></IdColumn>
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
  );
}
