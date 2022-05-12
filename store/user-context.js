import { createContext, useState } from "react";

export const UserContext = createContext({
  user: {},
  setUser: (data) => {},
});

export default function UserContextProvider({ children }) {
  const [userData, setUserData] = useState({});

  function setUser(data) {
    setUserData(data);
  }

  const value = {
    user: userData,
    setUser: setUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
