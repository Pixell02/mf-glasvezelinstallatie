import { createContext, useState } from "react";



export const CostContext = createContext();


export const CostContextProvider = (props) => {
  const [priceCost, setPriceCost] = useState(null);


  return (
    <CostContext.Provider value={{priceCost, setPriceCost}}>
      {props.children}
    </CostContext.Provider>
  )
}