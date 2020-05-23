import React from "react";

const IncomeTransactions = ({inc}) => {
  return (
    <li className="transaction" key={inc.id}>
      <span className="transaction-text">{inc.incomeText}</span>
      <span className="transaction-amount">${inc.incomeAmount}</span>
      <button className="delete-btn">
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
};

export default IncomeTransactions;
