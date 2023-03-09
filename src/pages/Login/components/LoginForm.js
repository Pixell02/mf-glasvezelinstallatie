import React from "react";
import { useNavigate } from "react-router";
import "./LoginForm.css";

export default function LoginForm() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/create");
  };

  return (
    <div className="w-100 h-100 d-flex justify-content-center">
      <form className="form-container d-flex flex-column border mx-2 mt-5 rounded">
        <div className="m-5 mt-2">
          <div className="login-title mt-1 mb-3">Zaloguj się</div>
          <label className="form-label">E-mail</label>
          <input type="email" className="form-control" />
          <label className="form-label">Hasło</label>
          <input type="password" className="form-control" />
          <button type="submit" onClick={handleLogin} className="btn btn-warning mt-4 w-100">
            Zaloguj sie
          </button>
        </div>
      </form>
    </div>
  );
}
