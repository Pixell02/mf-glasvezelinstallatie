import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDate } from "./useDate";
import { v4 as uuidv4 } from 'uuid';
import { CostContext } from "../../../../toAdd/Context/CostContext";

export const useData = (number) => {
  const id = uuidv4();
  const params = useParams();
  const { date } = useDate();
  const {price, setPrice} = useContext(CostContext);
  const [dataArray, setDataArray] = useState(Array.from({ length: number }, () => ({ description: "", price: "" })));
  
  const [data, setData] = useState({
    type: params.id,
    AVSNumber: "",
    ProjectNumber: "",
    ProjectName: "",
    Place: "",
    Date: date,
    Contact: "",
    CreditorCode: "",
    CreditorName: "",
    data: dataArray,
    uid: id
  });
  
  const [toAddData, setToAddData] = useState({
    email: "email",
    projectName: data.ProjectName,
    type: params.id,
    Date: date,
    uid: id
  });

  const handleAddData = (name, value) => {
    setPrice((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    setToAddData((prevState) => ({
      ...prevState,
      projectName: data.ProjectName,
    }));
  }, [data]);

  useEffect(() => {
    
    setData((prevState) => ({
      ...prevState,
      data: dataArray,
    }));
  }, [dataArray]);
  

  return { handleAddData, setDataArray, data, toAddData, setData };
};
