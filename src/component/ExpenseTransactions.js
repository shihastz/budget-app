import React from "react";

const ExpenseTransactions = ({ exp }) => {
  return (
    <li className="transaction">
      <span className="transaction-text">{exp.expenseText}</span>
      <span className="transaction-amount">${exp.expenseAmount}</span>
      <button className="delete-btn">
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
};

export default ExpenseTransactions;
