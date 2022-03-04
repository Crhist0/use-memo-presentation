import { createContext, useState } from "react";

export const AppContext = createContext();

/*=============
 * AppContextProvider.
 *
 * @context
=============*/

export const AppContextProvider = ({ children }) => {
  const [state, setState] = useState("");

  const value = { state, setState };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
