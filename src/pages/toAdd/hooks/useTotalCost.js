import { useContext, useEffect, useState } from "react";
import { CostContext } from "../Context/CostContext";



const useTotalCost = () => {

  const {price} = useContext(CostContext);

  const[totalPrice, setTotalPrice] = useState();

  useEffect(() => {
    if(price) {
      let totalResult = 0;
      price.data.forEach((item) => {
        totalResult += Number(item.price) * Number(item.amount);
      })
      setTotalPrice(totalResult);
    }
  },[price])

  return {totalPrice, setTotalPrice}
}


export default useTotalCost;