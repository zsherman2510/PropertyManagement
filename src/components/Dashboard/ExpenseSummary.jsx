import React, { useState } from "react";
import SummaryItem from "../UIComponents/SummaryItem";
import TableComponent from "../UIComponents/TableComponent";

const ExpenseSummary = ({ expenses }) => {
  console.log(expenses, "expenses");
  const [loading, setLoading] = useState(false);
  const totalExpenses = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );
  const highestExpense = expenses.reduce(
    (maxExpense, expense) =>
      expense.amount > maxExpense.amount ? expense : maxExpense,
    expenses[0]
  );
  const recentExpenses = expenses.slice(0, 5); // Show the 5 most recent expenses
  console.log(totalExpenses, "highestexpense");

  return (
    <div className="expense-summary-widget">
      <h2 className="fw-bold fs-5 mb-2">Expense Summary</h2>
      <SummaryItem label="Total Expenses:" value={totalExpenses.toFixed(2)} />
      <SummaryItem
        label="Highest Expense:"
        value={highestExpense.amount.toFixed(2)}
      />
      <div className="recent-expenses mt-4">
        <h3>Recent Expenses</h3>
        {loading ? (
          <div>Loading...</div>
        ) : (
          recentExpenses.length > 0 ? (
            <TableComponent data={recentExpenses}/>
          ) : (
            <p>No recent expenses</p>
          )
        )}
      </div>
    </div>
  );
};

export default ExpenseSummary;
