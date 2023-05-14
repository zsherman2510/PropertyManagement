import React, { useState, useEffect } from "react";
import PropertySummary from "./PropertySummary";
import FinancialSummary from "./FinancialSummary";
import MaintenanceSummary from "./MaintenanceSummary";
import ExpenseSummary from "./ExpenseSummary";
import PaymentsSummary from "./PaymentsSummary";

const Dashboard = ({ data }) => {
  const { expenses, payments, maintenanceRequests } = data;
  return (
    <div>
      <PropertySummary />
      <div className="container d-flex justify-content-between p-0 mt-4">
        <div className="col-md-6">
          <FinancialSummary expenseItems={expenses} incomeItems={payments} />
        </div>
        <div className="col-md-6">
          <PaymentsSummary payments={payments} />
        </div>
      </div>
      <div className="container p-0 d-flex mt-4">
        <div className="col-12">
          <MaintenanceSummary maintenanceRequests={maintenanceRequests} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
