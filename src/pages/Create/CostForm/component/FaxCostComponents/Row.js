import React from "react";
import IdColumn from "./IdColumn";
import DescriptionDimension from "./DescriptionDimension";
import UnitDimension from "./UnitDimension";
import PiecesDimension from "./PIecesDimension";
import PriceDimension from "./PriceDimension";
import TotalDimension from "./TotalDimension";

export default function Row() {
  return (
    <tr
      className="d-flex flex-row border border-dark mt-3 mb-3"
      style={{ border: "1px solid black", backgroundColor: "rgba(220,220,220)" }}
    >
      <IdColumn></IdColumn>
      <DescriptionDimension>
        <b>Omschrijving</b>
      </DescriptionDimension>
      <UnitDimension>
        <b>Eenheid</b>
      </UnitDimension>
      <PiecesDimension>
        <b>Stuks</b>
      </PiecesDimension>
      <PriceDimension>
        <b>Prijs</b>
      </PriceDimension>
      <TotalDimension>
        <b>Totaal</b>
      </TotalDimension>
    </tr>
  );
}
