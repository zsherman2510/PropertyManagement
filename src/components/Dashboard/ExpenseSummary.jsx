import React, { useState } from "react";
import SummaryItem from "../UIComponents/SummaryItem";
import TableComponent from "../UIComponents/TableComponent";
import { Bar } from "react-chartjs-2";

const ExpenseSummary = ({ expenses }) => {
  const [loading, setLoading] = useState(false);
  const startDate = '2023-05-01';
  const endDate = '2023-06-30';
  const filteredExpenses = expenses.filter(
    (expense) => expense.date >= startDate && expense.date <= endDate
  );

  // Calculate total expenses by category
  const categories = Array.from(new Set(expenses.map((expense) => expense.category)));
  const totalExpenses = {};
  categories.forEach((category) => {
    totalExpenses[category] = 0;
  });
  filteredExpenses.forEach((expense) => {
    totalExpenses[expense.category] += expense.amount;
  });
  const recentExpenses = expenses.slice(0, 5); // Show the 5 most recent expenses
  // Chart options
  const chartOptions = {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(0, 0, 0, 0.1)",
        },
        ticks: {
          callback: (value) => "$" + value,
        },
      },
    },
  };

  // Prepare data for chart
  const chartData = {
    labels: categories,
    datasets: [
      {
        label: 'Total Expenses',
        data: Object.values(totalExpenses),
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="expense-summary-widget">
      <h2>Total Expenses by Category - {startDate} to {endDate}</h2>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default ExpenseSummary;
