

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "", salary: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userData", JSON.stringify(formData));
    toast.success("Registration successful!");
    navigate("/login");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#f5f5f5",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "25px",
          borderRadius: "10px",
          boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
          width: "350px",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "20px", fontSize: "22px", color: "#333" }}>Register</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "12px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              outline: "none",
            }}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "12px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              outline: "none",
            }}
          />
          <input
            type="number"
            name="salary"
            placeholder="Salary"
            value={formData.salary}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "15px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              outline: "none",
            }}
          />
          <button
            type="submit"
            style={{
              width: "100%",
              backgroundColor: "#28a745",
              color: "white",
              border: "none",
              padding: "10px",
              fontSize: "16px",
              cursor: "pointer",
              borderRadius: "5px",
            }}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
