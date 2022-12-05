import { createContext, useEffect, useReducer } from "react";
import Reducer from "./Reducer";

const INITIAL_STATE = {
  admin: JSON.parse(localStorage.getItem("admin")) || null,
  isFetching: false,
  error: false,
};

export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("admin", JSON.stringify(state.admin));
  }, [state.admin]);

  // const url = "http://localhost:5000/";
  const url = "https://mern-pc-shopping-api.onrender.com";
  return (
    <Context.Provider
      value={{
        url:url,
        admin: state.admin,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};
