import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import IncomeTransactions from "./IncomeTransactions";

const IncomeList = () => {
  const { incomeTransactions } = useContext(GlobalContext);
  return (
    <div className="transactions transactions-income">
      <h2>Transaction History</h2>
      <ul className="transaction-list">
        {incomeTransactions
          ? incomeTransactions.map((inc) => (
              <IncomeTransactions key={inc.id} inc={inc}/>
            ))
          : null}
      </ul>
    </div>
  );
};

export default IncomeList;
