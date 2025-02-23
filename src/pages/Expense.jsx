
import React, { useEffect, useState } from "react";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import ReportDownload from "../components/ReportDownload"; 
import { Container, Row, Col, Alert, Button } from "react-bootstrap";

const Expense = ({ expenses, addExpense, deleteExpense }) => {
  const [salary, setSalary] = useState(0);
  const [dismissWarning, setDismissWarning] = useState(false);

  useEffect(() => {
    // Fetch salary from profile in localStorage
    const savedProfile = JSON.parse(localStorage.getItem("profile"));
    if (savedProfile && savedProfile.salary) {
      setSalary(parseFloat(savedProfile.salary));
    }
  }, []);

  // Calculate total expenses
  const totalExpenses = expenses.reduce((sum, expense) => sum + parseFloat(expense.amount || 0), 0);

  return (
    <div 
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#f8f9fa",
      }}
    >
      <Container 
        className="p-4"
        style={{
          maxWidth: "600px", 
          background: "white",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
        }}
      >
        <h2>Expense Tracker</h2>

        {/* Show Warning if Expenses Exceed Salary */}
        {!dismissWarning && totalExpenses > salary && (
          <Alert variant="danger" className="mt-3">
            ⚠️ You have exceeded your salary limit of ₹{salary}!
            <div className="mt-2">
              <Button variant="outline-danger" size="sm" onClick={() => setDismissWarning(true)}>
                Dismiss Warning
              </Button>
            </div>
          </Alert>
        )}

        <ExpenseForm addExpense={addExpense} />
        <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
        
        {/* Centering Button */}
        <Row className="mt-3 justify-content-center">
          <Col xs="auto">
            <ReportDownload expenses={expenses} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Expense;
