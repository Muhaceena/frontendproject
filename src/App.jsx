

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Expense from "./pages/Expense";
import Dashboard from "./pages/Dashboard";
import Feedback from "./pages/Feedback";
import NotFound from "./pages/NotFound";
import Logout from "./pages/Logout";

const App = () => {
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem("expenses");
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (index) => {
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(updatedExpenses);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/expense" element={<Expense expenses={expenses} addExpense={addExpense} deleteExpense={deleteExpense} />} />
        <Route path="/dashboard" element={<Dashboard expenses={expenses} />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all for 404 pages */}
      </Routes>
    </Router>
  );
};

export default App;
