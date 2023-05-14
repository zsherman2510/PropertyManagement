import React, { useState, useEffect } from "react";
import PropertySummary from "./PropertySummary";
import FinancialSummary from "./FinancialSummary";
import MaintenanceSummary from "./MaintenanceSummary";
import ExpenseSummary from "./ExpenseSummary";
import PaymentsSummary from "./PaymentsSummary";

const Dashboard = () => {

  const [properties, setProperties] = useState([]);
  const [maintenanceRequests, setMaintenanceRequests] = useState([]);
  const [payments, setPayments] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [tenants, setTenants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const mockResponse = await fetch("data.json");
        const res = await mockResponse.json();
        const { expenses, maintenanceRequests, payments, properties, tenants } = res;
        setMaintenanceRequests(maintenanceRequests);
        setPayments(payments);
        setProperties(properties);
        setExpenses(expenses);
        setTenants(tenants);
      } catch(error) {
        <div> early fethcing data</div>
      }
      
    }

    fetchData();
  }, []);
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
      <div className="container p-0 d-flex my-4">
        <div className="col-12">
          <MaintenanceSummary maintenanceRequests={maintenanceRequests} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
