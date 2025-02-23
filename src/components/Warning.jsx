import React from "react";

const Warning = ({ total, limit }) => {
  return total > limit ? (
    <div className="alert alert-danger mt-3">⚠️ Warning: You have exceeded your budget limit of ₹{limit}!</div>
  ) : null;
};

export default Warning;
