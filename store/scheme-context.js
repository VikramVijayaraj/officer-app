import { createContext, useState } from "react";

export const SchemeContext = createContext({
  scheme: {},
  setScheme: (scheme) => {},
});

export default function SchemeContextProvider({ children }) {
  const [schemeDetail, setSchemeDetail] = useState({});

  function setScheme(scheme) {
    setSchemeDetail(scheme);
  }

  const value = {
    scheme: schemeDetail,
    setScheme: setScheme,
  };

  return (
    <SchemeContext.Provider value={value}>{children}</SchemeContext.Provider>
  );
}
