import React from 'react';
import SummaryItem from '../UIComponents/SummaryItem';
import TableComponent from '../UIComponents/TableComponent';

const FinancialSummary = ({ incomeItems, expenseItems }) => {
  // Get the most recent income and expense items (up to 5 items)
  // const recentIncomeItems = incomeItems.slice(0, 5);
  const sortByDate = expenseItems.sort((a, b) => new Date(b.date) - new Date(a.date))
  const recentExpenses = sortByDate.slice(0, 5);
  // Calculate the total income and total expenses
  const totalIncome = incomeItems.reduce((total, item) => total + item.amount, 0);
  const totalExpenses = expenseItems.reduce((total, item) => total + item.amount, 0);

  const netIncome = totalIncome - totalExpenses;

  return (
    <div className="financial-summary-widget p-4">
      <h2 className="fw-bold fs-5 mb-2">Financial Summary</h2>
      <SummaryItem label="Total Income:" value={totalIncome} />
      <SummaryItem label="Total Expenses:" value={totalExpenses} />
      <SummaryItem label="Net Income:" value={netIncome} />
      <div className="recent-requests">
        <h3>Recent Expenses</h3>
        {recentExpenses.length > 0 ? (
          <TableComponent data={recentExpenses} />
        ) : (
          <p>No recent expenses</p>
        )}
      </div>
    </div>
  );
};

export default FinancialSummary;
