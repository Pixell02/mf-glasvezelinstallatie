import React, { useContext, useEffect, useState } from "react";
import { useData } from "./useData";
import { CostContext } from "../../../../toAdd/Context/CostContext";

export const useScaleTextArea = ({number}) => {
  const [text, setText] = useState(Array.from({ length: number }, () => ({ description: "", amount: null, price: "" })));
  const [textAreaHeight, setTextAreaHeight] = useState(Array(number));
  const {price, setPrice} = useContext(CostContext);

  useEffect(() => {
    setPrice((prevState) => ({
      ...prevState,
      data:text
    }))
  },[text])

  useEffect(() => {
    setText(prevText => {
      const newText = prevText.slice(); // create a copy of the previous text array
      const newLength = number - prevText.length;
      if (newLength > 0) {
        // add new items to the array
        for (let i = 0; i < newLength; i++) {
          newText.push({ description: "", price: "" });
        }
      }
      return newText;
    });
  }, [number]);

  useEffect(() => {
    const textAreaElements = Array.from({ length: number }, (_, i) => document.getElementById(`textArea${i}`));
    const hasAllTextAreaElements = textAreaElements.every((element) => element !== null);
    
    if (hasAllTextAreaElements) {
      setTextAreaHeight(textAreaElements.map((element) => `${element.scrollHeight}px`));
    }
  }, [text, number]);
  

  const handleTextChange = (e, className, i) => {
    const newText = [...text];
    if (className === "description") {
      newText[i].description = e;
    } else if (className === "price") {
      const value = e
      newText[i].price = value.slice(1);
    } else {
      newText[i].amount = e;
    }
    setText(newText);
  }

  return {text, textAreaHeight, handleTextChange, setText};
};
