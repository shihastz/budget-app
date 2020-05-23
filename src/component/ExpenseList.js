import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import ExpenseTransactions from "./ExpenseTransactions";

const ExpenseList = () => {
  const { expenseTransactions } = useContext(GlobalContext);
  return (
    <div className="transactions transactions-expense">
      <h2>Transaction History</h2>
      <ul className="transaction-list">
        {expenseTransactions
          ? expenseTransactions.map((exp) => (
              <ExpenseTransactions key={exp.id} exp={exp}/>
            ))
          : null}
      </ul>
    </div>
  );
};

export default ExpenseList;
