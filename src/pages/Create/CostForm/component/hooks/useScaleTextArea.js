import React, { useEffect, useState } from "react";


export const useScaleTextArea = (value, number) => {
  const [text, setText] = useState(Array(value).fill());
  const [textAreaHeight, setTextAreaHeight] = useState(Array());

  useEffect(() => {
    setTextAreaHeight(`${document.getElementById('textArea').scrollHeight}px`);
  },[text]);

  const handleTextChange = (e, i) => {
    const newTextValue = [...text]
    newTextValue[i] = e.target.value;
    setText(newTextValue);
  }

  return {text, textAreaHeight, handleTextChange}

}