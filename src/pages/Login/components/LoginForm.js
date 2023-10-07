import React, { useState } from "react";
import "./LoginForm.css";
import useSearchUser from "./hooks/useSearchUser";

export default function LoginForm() {
  
  const {searchUser, error} = useSearchUser();
  const [userLoginData, setUserLoginData] = useState({
    email: "",
    password: "",
  });

  const handleDataChange = (e) => {
    setUserLoginData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  

  const handleLogin = (e) => {
    e.preventDefault();
    searchUser(userLoginData.email, userLoginData.password)
  };

  return (
    <div className="w-100 h-100 d-flex justify-content-center">
      <form className="form-container d-flex flex-column border mx-2 rounded">
        <div className="m-5 mt-2">
          <div className="login-title mt-1 mb-3">Zaloguj się</div>
          <label className="form-label">E-mail</label>
          <input
            type="email"
            value={userLoginData.email}
            onChange={handleDataChange}
            className="form-control"
            name="email"
          />
          <label className="form-label">Hasło</label>
          <input 
          type="password"
          value={userLoginData.password}
          onChange={handleDataChange} 
          className="form-control" 
          name="password" />
          <button type="submit" onClick={handleLogin} className="btn btn-warning mt-4 w-100">
            Zaloguj sie
          </button>
          {error && <p style={{color: "red"}}>Błąd</p>}
        </div>
      </form>
    </div>
  );
}
