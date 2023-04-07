import React, { useContext, useEffect, useState } from "react";
import { useData } from "./useData";
import { CostContext } from "../../../../toAdd/Context/CostContext";

export const useScaleTextArea = ({number}) => {
  const [text, setText] = useState(Array.from({ length: number }, () => ({ description: "", price: "" })));
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
    setTextAreaHeight(Array.from({ length: number}, (_, i) => `${document.getElementById(`textArea${i}`).scrollHeight}px`));
  },[text]);

  const handleTextChange = (e, className, i) => {
    const newText = [...text];
    if (className === "description") {
      newText[i].description = e;
    } else if (className === "price") {
      newText[i].price = e;
    }
    setText(newText);
  }

  return {text, textAreaHeight, handleTextChange, setText};
};
