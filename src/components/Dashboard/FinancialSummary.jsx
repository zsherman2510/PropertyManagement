import React from "react";
import { Line } from "react-chartjs-2";

const FinancialSummary = ({ payments, months, monthlyGoal }) => {
  const monthlyTotals = months.map(month => {
    const monthlyPayments = payments.filter(payment => payment.date.startsWith(month));
    const totalAmount = monthlyPayments.reduce((sum, payment) => sum + payment.amount, 0);
    return totalAmount;
  });
  
  const data = {
    labels: months,
    datasets: [
      {
        label: 'Total Rent Amount',
        data: monthlyTotals,
        fill: false,
        borderColor: 'rgba(54, 162, 235, 1)',
        tension: 0.3,
      },
      {
        label: 'Goal',
        data: Array(months.length).fill(monthlyGoal),
        fill: false,
        borderColor: 'rgba(255, 99, 132, 1)',
        tension: 0.3,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1000,
        },
      },
    },
  };
  // Get the most recent income and expense items (up to 5 items)

  return (
    <div className="dashboard-background p-3">
      <h2>Monthly Rent Payments</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default FinancialSummary;
