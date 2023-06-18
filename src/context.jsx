import { createContext } from "react";

const Context = createContext();

const store = {};

export default function ContextProvider({ children }) {
  return <Context.Provider value={store}>{children}</Context.Provider>;
}
