import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  incomeTransactions: [{ id: 1, incomeText: "salary", incomeAmount: 15000 }],
  expenseTransactions: [{ id: 1, expenseText: "salary", expenseAmount: 15000 }],
};

export const GlobalContext = createContext(initialState);

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  
  return (
    <GlobalContext.Provider
      value={{
        incomeTransactions: state.incomeTransactions,
        expenseTransactions: state.expenseTransactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
