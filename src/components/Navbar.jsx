
import React from "react";
import { Link } from "react-router-dom"; // Import Link

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        backgroundColor: "#2c3e50",
        padding: "15px 20px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        zIndex: 1000,
      }}
    >
      <h2 style={{ color: "white", margin: 0 }}>Expense Tracker</h2>

      {/* Navigation Links */}
      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/" style={menuLinkStyle}>Home</Link>
        <Link to="/dashboard" style={menuLinkStyle}>Dashboard</Link>
        <Link to="/expense" style={menuLinkStyle}>Expenses</Link>
        <Link to="/profile" style={menuLinkStyle}>Profile</Link>
        <Link to="/feedback" style={menuLinkStyle}>Feedback</Link>
        <Link to="/logout" style={menuLinkStyle}>Logout</Link>
      </div>
    </nav>
  );
};


const menuLinkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "16px",
  padding: "5px 10px",
  borderRadius: "5px",
};

export default Navbar;
