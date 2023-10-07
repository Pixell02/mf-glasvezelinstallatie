import { collection, deleteDoc, doc, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../../../../firebase/config";
import { useLogin } from "../../../../hooks/useLogin";
import { useNavigate } from "react-router";


const useSearchUser = () => {

  const navigate = useNavigate();
  const { login, error } = useLogin();

  const searchUser = (email, password) => {
    let userRef = collection(db, "usersToAdd");
    userRef = query(userRef, where('email', '==', email),
    where("password", "==", password))

    onSnapshot(userRef, (snapshot) => {
      let results = [];
      snapshot.docs.forEach((doc) => {
        results.push({...doc.data(), id: doc.id});
      })
      if(results.length > 0) {
        navigate(`/createUser/${results[0].id}`)
      } else {
        login(email, password)
        
      }
    })


  }


  return {searchUser, error}
}

export default useSearchUser;