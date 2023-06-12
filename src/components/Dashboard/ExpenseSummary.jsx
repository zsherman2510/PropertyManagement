import React, { useState } from "react";
import SummaryItem from "../UIComponents/SummaryItem";
import TableComponent from "../UIComponents/TableComponent";
import { Bar } from "react-chartjs-2";

const ExpenseSummary = ({ expenses }) => {
  const [loading, setLoading] = useState(false);

  // Calculate total expenses by category
  const categories = Array.from(new Set(expenses.map((expense) => expense.category)));
  const totalExpenses = {};
  categories.forEach((category) => {
    totalExpenses[category] = 0;
  });
  expenses.forEach((expense) => {
    totalExpenses[expense.category] += expense.amount;
  });
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
        backgroundColor: '#1a73e8',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="dashboard-background p-3">
      <h2 className="font-bold">Total Expenses by Category </h2>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default ExpenseSummary;
