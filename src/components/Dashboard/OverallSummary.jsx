import React from 'react'
import DashboardWidget from '../UIComponents/DashboardWidget'

const OverallSummary = ({ monthlyIncome, highPriorityRequests, totalExpenses, totalIncome }) => {
 const dollarMonthly = monthlyIncome.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  const dollarTotalIncome = totalIncome.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  const dollarExpenses = totalExpenses.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <div className='container property-summary' style={{ padding: '40px'}}>
      <DashboardWidget title="Monthly Income" value={dollarMonthly} color="#1a73e8" />
      <DashboardWidget title="Total Income" value={dollarTotalIncome} color="#4caf50" />
      <DashboardWidget title="Total Expenses" value={dollarExpenses} color="#e53935" />
      <DashboardWidget title="High Priority M/R" value={highPriorityRequests} color="#ff9800" />
    </div>
  )
}

export default OverallSummary