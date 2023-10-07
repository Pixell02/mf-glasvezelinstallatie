import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDate } from "./useDate";
import { v4 as uuidv4 } from 'uuid';
import { CostContext } from "../../../../toAdd/Context/CostContext";
import { useAuthContext } from "../../../../../hooks/useAuthContext";

export const useData = (number) => {
  
  const id = uuidv4();
  const params = useParams();
  const { date } = useDate();
  const { user } = useAuthContext();
  const {price, setPrice} = useContext(CostContext);
  const [dataArray, setDataArray] = useState(Array.from({ length: number }, () => ({ description: "", amount: 0, price: "" })));
  
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
    uid: id,
  });
  
  const [toAddData, setToAddData] = useState({
    email: user.email,
    projectName: price.ProjectName,
    type: params.id,
    Date: date,
    photo: [""],
    uid: price.uid,
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
      projectName: price.ProjectName,
    }));
  }, [price]);

  useEffect(() => {
    
    setData((prevState) => ({
      ...prevState,
      data: dataArray,
    }));
  }, [dataArray]);
  

  return { handleAddData, setDataArray, data, toAddData, setToAddData, setData };
};
