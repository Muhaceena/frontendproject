
import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw", 
        textAlign: "center",
      }}
    >
      <h1>Welcome to Expense Tracker</h1>
      <p>Manage your expenses smartly!</p>
      <div>
        {/* Use Link instead of button for navigation */}
        <Link to="/login">
          <button
            style={{
              margin: "10px",
              padding: "10px 20px",
              backgroundColor: "blue",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </Link>
        <Link to="/register">
          <button
            style={{
              margin: "10px",
              padding: "10px 20px",
              backgroundColor: "green",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Register
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;

