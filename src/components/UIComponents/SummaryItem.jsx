import React from "react";

const SummaryItem = ({ title, value, color }) => {
  return (
    <div className="dashboard-widget" style={{ background: color }}>
      <h3 className="widget-value">{value}</h3>
      <p className="widget-title">{title}</p>
    </div>
  );
};

export default SummaryItem;
