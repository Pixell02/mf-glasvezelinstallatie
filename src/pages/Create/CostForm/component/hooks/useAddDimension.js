import React, { useEffect, useState } from 'react'

export const useAddDimension = () => {
  const [numberOfDimensions, setNumberOfDimensions] = useState(1);

  const handleAddDimension = (e) => {
    setNumberOfDimensions(numberOfDimensions + 1)
    
  };
    useEffect(() => {
      console.log(numberOfDimensions)
    },[numberOfDimensions])

    
  return {numberOfDimensions, handleAddDimension}

}
