import { doc, getDoc } from "firebase/firestore"
import { useState } from "react"
import { db } from "../firebase/config"



export const useSingleDoc = (col, id) => {

  const [document, setDocument] = useState({})

  const docRef = doc(db, col, id)

  getDoc(docRef)
   .then((doc) => {
    console.log(doc.data(), doc.id)
    setDocument(doc.data(), doc.id)
   })

   return {document}

}