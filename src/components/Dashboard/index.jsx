import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import PropertySummary from "./PropertySummary";
import FinancialSummary from "./FinancialSummary";
import MaintenanceSummary from "./MaintenanceSummary";
import ExpenseSummary from "./ExpenseSummary";
import PaymentsSummary from "./PaymentsSummary";
import FinancialGoal from "./FinancialGoal";
import MaintenanceRequestsChart from "./MaintenanceChart";
import OverallSummary from "./OverallSummary";

Chart.register(CategoryScale);

const Dashboard = () => {
  const [properties, setProperties] = useState([]);
  const [maintenanceRequests, setMaintenanceRequests] = useState([]);
  const [payments, setPayments] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [tenants, setTenants] = useState([]);
  const monthlyGoal = 100000;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const mockResponse = await fetch("data.json");
        const res = await mockResponse.json();
        const { expenses, maintenanceRequests, payments, properties, tenants } =
          res;
        setMaintenanceRequests(maintenanceRequests);
        setPayments(payments);
        setProperties(properties);
        setExpenses(expenses);
        setTenants(tenants);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const months = [...new Set(payments.map(payment => payment.date.substring(0, 7)))];
  const calculateAverageMonthlyIncome = (payments) => {
    const totalIncome = payments.reduce((sum, payment) => sum + payment.amount, 0);
    const averageIncome = totalIncome / 12;
    return averageIncome;
  };
  
  const monthlyTotals = months.map(month => {
   
    const monthlyPayments = payments.filter(payment => payment.date.startsWith(month));
    const totalAmount = monthlyPayments.reduce((sum, payment) => sum + payment.amount, 0);
    return { monthlyPayments, totalAmount };
  });
  //const totalIncome = payments.reduce((sum, payment) => sum + payment.amount, 0);
  const totalIncome = payments.reduce((sum, payment) => sum + payment.amount, 0)
  const totalMonthlyIncome = calculateAverageMonthlyIncome(payments);
  console.log(totalMonthlyIncome, 'totalMonthlyIncome'); // Output: 9000

  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  console.log(totalExpenses, 'expenses')
  const goalPercentage = (totalMonthlyIncome / monthlyGoal) * 100;
  const adjustedPercentage = goalPercentage.toFixed(0);
  const counts = {
    High: 0
  }
  maintenanceRequests.forEach((req) => {
    counts[req.status]++;
  })
  const highPriorityRequests = counts["High"];
  return (
    <div className="my-4">
      <OverallSummary monthlyIncome={totalMonthlyIncome} highPriorityRequests={highPriorityRequests} totalExpenses={totalExpenses} totalIncome={totalIncome}  />
      <div className="wrapper container d-flex flex-wrap justify-content-around p-3 mt-4 align-items-center">
        <div className="col-12 col-sm-12 col-md-8">
          <FinancialSummary payments={payments} monthlyTotals={monthlyTotals} months={months} monthlyGoal={monthlyGoal} />
        </div>
        <div className="col-12 col-sm-12 col-md-3 my-4">
          <FinancialGoal goalAmount={monthlyGoal} goalPercentage={adjustedPercentage} />
        </div>
        <div className="col-12">
          <PropertySummary properties={properties} />
        </div>
        <div className="col-12 col-sm-12 col-md-8">
          <ExpenseSummary expenses={expenses} />
        </div>
        
        <div className="col-12 col-md-3 align-self-center">
          <MaintenanceRequestsChart maintenanceRequests={maintenanceRequests}/>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
