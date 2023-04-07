import React, { useState } from 'react'

export const useAddDimension = () => {
  const [numberOfDimensions, setNumberOfDimensions] = useState(1);

  const handleAddDimension = (e) => {
    setNumberOfDimensions(numberOfDimensions + 1)
    
  };
   
    
  return {numberOfDimensions, handleAddDimension ,setNumberOfDimensions}

}
