import { useState } from "react";
import { UserContext } from "./UserContext.jsx";

export default function UserProvider({ children }) {
  const [token, setToken] = useState(true);

  const logout = () => {
    setToken(false);
  };

  const login = () => {
  setToken(true);
  };

  return (
    <UserContext.Provider value={{ token, logout ,login}}>
      {children}
    </UserContext.Provider>
  );
}