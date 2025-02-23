
import React from "react";
import * as XLSX from "xlsx";

const ReportDownload = ({ expenses }) => {
  const downloadReport = () => {
    const ws = XLSX.utils.json_to_sheet(expenses);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Expenses");
    XLSX.writeFile(wb, "ExpenseReport.xlsx");
  };

  return (
    <button className="btn btn-success mt-3" onClick={downloadReport}>
      Download Report as Excel 📊
    </button>
  );
};

export default ReportDownload;
