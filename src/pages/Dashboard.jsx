
import React, { useEffect, useState } from "react";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer, Legend } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A569BD", "#E74C3C"];

const Dashboard = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const storedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
    setExpenses(storedExpenses);
  }, []);

  const chartData = expenses.map((expense, index) => ({
    name: expense.name || expense.category || `Expense ${index + 1}`, // Use name, category, or fallback
    value: parseFloat(expense.amount) || 0,
    color: COLORS[index % COLORS.length],
  }));

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh", // Full viewport height
      width: "100vw",  // Full viewport width
      textAlign: "center",
      backgroundColor: "#f8f9fa",
    }}>
      <div style={{
        background: "white",
        padding: "30px",
        borderRadius: "10px",
        boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
        width: "90%",
        maxWidth: "500px",
        textAlign: "center",
      }}>
        <h2 style={{ marginBottom: "20px" }}>Dashboard</h2>
        {chartData.length > 0 ? (
          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}>
            <ResponsiveContainer width={350} height={350}>
              <PieChart>
                <Pie data={chartData} cx="50%" cy="50%" outerRadius={120} fill="#8884d8" dataKey="value" label>
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <p>No expenses recorded yet.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
