import { useEffect, useState } from "react";

const usePasswordGenerator = () => {
  const [password, setPassword] = useState("");

  useEffect(() => {
    const length = 8; // długość hasła
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"; // zestaw znaków do losowania
    let newPassword = "";
    for (let i = 0; i < length; i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    setPassword(newPassword);
  },[])
  return { password }
}
export default usePasswordGenerator;