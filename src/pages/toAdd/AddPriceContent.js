import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import LeftBar from "../../components/LeftBar";
import MainContent from "../../components/MainContent";
import Navbar from "../../components/Navbar";
import { useCollection } from "../../hooks/useCollection";
import AddPriceForm from "./AddPriceForm";
import { CostContext } from "./Context/CostContext";
import { v4 as uuidv4 } from 'uuid';
export default function AddPriceContent() {
  const params = useParams();
  const id = uuidv4();
  const { documents: faxData } = useCollection("toAddData", ["uid", "==", params.id]);
  const [price, setPrice] = useState({
    type: params.id,
    AVSNumber: "",
    ProjectNumber: "",
    ProjectName: "",
    Place: "",
    Date: "",
    Contact: "",
    CreditorCode: "",
    CreditorName: "",
    data: [],
    uid: id
  });


  useEffect(() => {
    if(faxData){
      if(faxData[0]){
    setPrice(prevState => ({
      ...prevState,
      data: faxData[0].data
    }));
    }
  }
  }, [faxData]);

  useEffect(() => {
    if (faxData) {
        setPrice((prevState) => {
        const newData = { ...prevState };
        
        Object.keys(newData).forEach((key) => {
          
          const faxKey = key;
          if (faxData[0] && faxData[0].hasOwnProperty(faxKey)) {
            newData[key] = faxData[0][faxKey];
            console.log(newData[key])
          }
        });
        
        return newData;
      });
    }
  }, [faxData]);
 

  
  return (
    <CostContext.Provider value={{ price, setPrice }}>
      <div className="w-100 h-100">
        <Navbar />
        <div className="d-flex flex-row w-100">
          <LeftBar />
          <div className="d-flex justify-content-center align-items-center w-100 h-100 mt-5">
            <MainContent>
              {price && price.AVSNumber && (
                <AddPriceForm
                />
              )}
            </MainContent>
          </div>
        </div>
      </div>
    </CostContext.Provider>
  );
}
