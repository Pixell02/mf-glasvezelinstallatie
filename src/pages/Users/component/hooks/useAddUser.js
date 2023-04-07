import React, { useEffect, useState } from "react";
import { AddDoc } from "../../../../hooks/useAddDoc";

export default function useAddUser(password) {
  const [userPassword, setUserPassword] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    setUserPassword(password);
  }, [password]);

  useEffect(() => {
    setData({
      email: email,
      password: userPassword,
    });
  }, [email, userPassword]);

  const handleEmailValue = (value) => {
    setEmail(value);
  };

  const handleAddUser = () => {
    AddDoc("usersToAdd", data);
  };

  return { userPassword, handleEmailValue, handleAddUser };
}
