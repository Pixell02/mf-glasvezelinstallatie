import React, { useEffect, useState } from "react";
import LeftBar from "../../components/LeftBar";
import MainContent from "../../components/MainContent";
import Navbar from "../../components/Navbar";
import CreateContent from "./component/CreateContent";
import { useCollection } from "../../hooks/useCollection";
import { useAuthContext } from "../../hooks/useAuthContext";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

export default function Create() {
  const { user } = useAuthContext();

  const { documents: createdUser } = useCollection("createdUsers", ["email", "==", user.email]);
  const { documents: usersToAdd } = useCollection("usersToAdd", ["email", "==", user.email]);
  
  useEffect(() => {
    if (createdUser && usersToAdd) {
      if (createdUser[0] && usersToAdd[0]) {
        const userRef = doc(db, "createdUsers", createdUser[0].id);

        updateDoc(userRef, {
          uid: user.uid,
        }).then(() => {
          const delRef = doc(db, "usersToAdd", usersToAdd[0].id);
        deleteDoc(delRef);
        })

        
      }
    }
  }, [createdUser, usersToAdd]);

  return (
    <div>
      <Navbar />
      <div className="d-flex flex-row">
        <LeftBar />
        <MainContent>
          <CreateContent />
        </MainContent>
      </div>
    </div>
  );
}
