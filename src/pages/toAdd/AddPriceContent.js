import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import LeftBar from "../../components/LeftBar";
import MainContent from "../../components/MainContent";
import Navbar from "../../components/Navbar";
import { useCollection } from "../../hooks/useCollection";
import AddPriceForm from "./AddPriceForm";
import { CostContext } from "./Context/CostContext";
import { v4 as uuidv4 } from "uuid";
import usePrice from "./hooks/usePrice";
import { useData } from "../Create/CostForm/component/hooks/useData";
import { useAddDimension } from "../Create/CostForm/component/hooks/useAddDimension";
export default function AddPriceContent() {
  const params = useParams();
  const { documents: faxData } = useCollection("toAddData", ["uid", "==", params.id]);
  const { documents: userInfo } = useCollection("fromAddData", ["uid", "==", params.id]);
  
  
  const [price, setPrice] = useState({
    type: "",
    AVSNumber: "",
    ProjectNumber: "",
    ProjectName: "",
    Place: "",
    Date: "",
    Contact: "",
    CreditorCode: "",
    CreditorName: "",
    data: [],
    uid: "",
  });
  const [toAddData, setToAddData] = useState({
    email: "",
    projectName: "",
    type: "",
    Date: "",
    photo: [""],
    uid: "",
  });
  useEffect(() => {
    if(faxData){
    setPrice((prev) => ({
      ...prev,
      type: faxData[0].type,
      AVSNumber: faxData[0].AVSNumber,
      ProjectNumber: faxData[0].ProjectNumber,
      ProjectName: faxData[0].ProjectName,
      Place: faxData[0].Place,
      Date: faxData[0].Date,
      Contact: faxData[0].Contact,
      CreditorCode: faxData[0].CreditorCode,
      CreditorName: faxData[0].CreditorName,
      data: faxData[0].data,
      uid: faxData[0].uid,
    }));
    setToAddData((prev) => ({
      ...prev,
      email: userInfo[0].email,
      projectName: userInfo[0].projectName,
      type: userInfo[0].type,
      Date: userInfo[0].Date,
      photo: userInfo[0].photo,
      uid: userInfo[0].uid
    }))
  }
  }, [faxData]);


  return (
    <CostContext.Provider value={{ price, setPrice }}>
      <div className="w-100 h-100">
        <Navbar />
        <div className="d-flex flex-row w-100">
          <LeftBar />
          <div className="d-flex justify-content-center align-items-center w-100 h-100 mt-5">
            <MainContent>{price && price.AVSNumber && <AddPriceForm toAddData={toAddData} faxData={userInfo} />}</MainContent>
          </div>
        </div>
      </div>
    </CostContext.Provider>
  );
}
