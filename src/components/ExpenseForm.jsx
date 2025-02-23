import React, { useState } from "react";

const ExpenseForm = ({ addExpense }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !amount) return;
    addExpense({ text, amount: parseFloat(amount) });
    setText("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <input
        type="text"
        placeholder="Expense Name"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
        className="form-control mb-2"
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
        className="form-control mb-2"
      />
      <button type="submit" className="btn btn-primary w-100">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
