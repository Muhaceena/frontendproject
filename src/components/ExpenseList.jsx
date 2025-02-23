import React from "react";

const ExpenseList = ({ expenses, deleteExpense }) => {
  return (
    <div className="mt-3">
      <h3>Expense List</h3>
      {expenses.length === 0 ? (
        <p>No expenses added yet.</p>
      ) : (
        <ul className="list-group">
          {expenses.map((expense, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between">
              {expense.text} - ₹{expense.amount}
              <button className="btn btn-danger btn-sm" onClick={() => deleteExpense(index)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExpenseList;

