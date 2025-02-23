
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    setTimeout(() => {
      localStorage.removeItem("isAuthenticated");
      navigate("/");
    }, 1000);
  }, [navigate]);

  return <h2>Logging out...</h2>;
};

export default Logout;
