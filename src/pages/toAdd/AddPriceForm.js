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
import { useLocation, useNavigate } from "react-router";
import usePrice from "./hooks/usePrice";
import useTotalCost from "./hooks/useTotalCost";
import jsPDF from "jspdf";
import "jspdf-autotable";
import html2canvas from "html2canvas";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "../../firebase/config";
import { deleteDoc, doc } from "firebase/firestore";
export default function AddPriceForm({ data, name, setData, handleAddData, toAddData, dataArray, setDataArray, faxData }) {
  const { price } = useContext(CostContext);
  const location = useLocation().pathname.split("/")[1];
  const navigate = useNavigate()
  const { totalPrice } = useTotalCost();

  const handleAddToDataBase = (data, toAddData) => {
    AddDoc("toAddData", data);
    AddDoc("fromAddData", toAddData);
  };
  
  
const handleConvertToPDF = ( {price, toAddData, faxData} ) => {
  let toAddHistory = toAddData;
  const pdf = new jsPDF("l", "mm", "a4");
  const scalableDiv = document.querySelector("#table");
  const table = document.querySelector(".table-container");
  scalableDiv.style.transform = "scale(1)";
  html2canvas(table).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const pageWidth = 297;
    const pageHeight = 210;
    const imgWidth = pageWidth - 20; // 10 mm margin on each side
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
    pdf.save(`AVS Formulier ${price.type}`);
    // Convert the PDF to a Blob object
    const blob = new Blob([pdf.output("blob")], { type: "application/pdf" });

    // Upload the Blob to Firebase Storage
    const storageRef = ref(storage, `${price.uid}/` + "pdf");
    const uploadTask = uploadBytesResumable(storageRef, blob);

    uploadTask.on('state_changed', snapshot => {
      console.log("Uploaded", snapshot.totalBytes, "bytes.");
      console.log("File metadata:", snapshot.metadata);
    }, error => {
      console.error(error);
    });

    return uploadTask.then((snapshot) => {
      return getDownloadURL(snapshot.ref).then((url) => {
        toAddHistory.pdf = url;
        
        AddDoc("history", toAddHistory)
        AddDoc("dataHistory", price)
        console.log(faxData[0].id)
        const delRef = doc(db, "fromAddData", faxData[0].id)
        deleteDoc(delRef)
        setTimeout(() => {
          navigate('/History')
        },200)
    
      });
    });

  });
};


  const { numberOfDimensions, handleAddDimension, setNumberOfDimensions } = useAddDimension();

  useEffect(() => {
    if (price) {
      setNumberOfDimensions(price.data.length);
    }
  }, [price]);

  return (
    <div id="table" className="d-flex w-100 justify-content-center h-100">
      <div className="d-flex flex-column h-100 justify-content-center fax-cost-container">
        <div className="d-flex justify-content-end mb-2">
          {location !== "toAdd" && (
            <button
              onClick={() => handleAddToDataBase(data, toAddData)}
              className="btn btn-warning d-flex justify-content-center"
            >
              Zapisz
            </button>
          )}

          {location === "toAdd" && (
            <button
              onClick={() => handleConvertToPDF({price, toAddData, faxData} )}
              className="btn btn-warning d-flex justify-content-center"
            >
              Zapisz
            </button>
          )}
        </div>
        <div className="table-container">
          <table className="border border-dark" style={{ width: "100%" }}>
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
          {location === "toAdd" && (
            <div className="d-flex total-price-container">
              <b>
                <i>Totaal: {totalPrice} €</i>
              </b>
            </div>
          )}
        </div>
        <button onClick={handleAddDimension} className="mt-2 btn btn-warning">
          Dodaj nowy wiersz
        </button>
      </div>
    </div>
  );
}
