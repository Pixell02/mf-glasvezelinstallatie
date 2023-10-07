import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import useGetDoc from "../../hooks/useGetDoc";
import useSignup from "../../hooks/useSignup";
import { addDoc, collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useAuthContext } from "../../hooks/useAuthContext";

export default function CreateUser() {
  const params = useParams();
  const { user } = useAuthContext();
  const { signup } = useSignup();
  const [password, setPassword] = useState();
  const [userDoc, setUserDoc] = useState({});
  const [userData, setUserData] = useState({
    name: "",
    surName: "",
    email: "",
    uid: ""
  });
  const navigate = useNavigate();
  const docRef = doc(db, "usersToAdd", params.id);
  useEffect(() => {
    getDoc(docRef)
      .then((doc) => {
        setUserDoc(doc.data());
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params]);
  useEffect(() => {
    if (userDoc) {
      setUserData((prevState) => ({
        ...prevState,
        email: userDoc.email,
      }));
    }
  }, [userDoc]);
  const handleUserDataChange = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleCreateUser = (e) => {
    e.preventDefault();
    addDoc(collection(db, "createdUsers"), userData);
    signup(userDoc.email, password);
    setTimeout(() => {
      navigate("/create")
    },1000)
    
  };

  return (
    <div className="w-100 h-100 d-flex justify-content-center">
      <form className="form-container d-flex flex-column border mx-2 mt-5 rounded">
        <div className="m-5 mt-2">
          <div className="login-title mt-1 mb-3">Podaj dane</div>
          <label className="form-label">Imie</label>
          <input
            type="text"
            value={userData.name}
            onChange={handleUserDataChange}
            className="form-control"
            name="name"
          />
          <label className="form-label">Nazwisko</label>
          <input
            type="text"
            value={userData.surName}
            onChange={handleUserDataChange}
            className="form-control"
            name="surName"
          />
          <label className="form-label"> nowe hasło</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            name="password"
          />
          <button type="submit" onClick={handleCreateUser} className="btn btn-warning mt-4 w-100">
            Zaloguj sie
          </button>
        </div>
      </form>
    </div>
  );
}
