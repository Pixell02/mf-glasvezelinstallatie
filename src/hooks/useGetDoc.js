import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase/config"
import { useEffect, useState } from "react"



const useGetDoc = async(id) => {
  
  const [userDoc, setUserDoc] = useState({});

  const docRef = doc(db, "users", id)
  useEffect(() => {
    getDoc(docRef)
   .then((doc) => {
    setUserDoc(doc.data());
    console.log(doc.data())
   })
   .catch((err) => {
    console.log(err)
   });
  },[id])

  

  console.log(userDoc)

  return {userDoc};
}

export default useGetDoc;