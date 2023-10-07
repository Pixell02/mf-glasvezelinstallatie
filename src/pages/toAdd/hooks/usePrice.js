import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { v4 as uuidv4 } from "uuid";

const usePrice = (faxData) => {
  const params = useParams();
  const id = uuidv4();
  
  const [price, setPrice] = useState({
    type: faxData ? faxData[0].type : params.id,
    AVSNumber: faxData ? faxData[0].AVSNumber : "",
    ProjectNumber: faxData ? faxData[0].ProjectNumber : "",
    ProjectName: faxData ? faxData[0].ProjectName : "",
    Place: faxData ? faxData[0].Place : "",
    Date: faxData ? faxData[0].Date : "",
    Contact: faxData ? faxData[0].Contact : "",
    CreditorCode: faxData ? faxData[0].CreditorCode : "",
    CreditorName: faxData ? faxData[0].CreditorName : "",
    data: faxData ? faxData[0].data : [],
    uid: faxData ? faxData[0].uid : id,
  });

  

  useEffect(() => {
    if (price) {
      if (price[0]) {
        setPrice((prevState) => ({
          ...prevState,
          data: price[0].data,
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
            console.log(newData[key]);
          }
        });

        return newData;
      });
    }
  }, [faxData]);

  return { price, setPrice };
};

export default usePrice;
