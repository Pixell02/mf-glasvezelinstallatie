import { addDoc, collection } from 'firebase/firestore'
import React from 'react'
import { db } from '../firebase/config'

export const AddDoc = (ref, data) => {
  
  const docRef = collection(db, ref);
  addDoc(docRef, data);

  return { AddDoc }
}
