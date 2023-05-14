import React from 'react';
import SummaryItem from '../UIComponents/SummaryItem';

const PaymentsSummary = ({ payments }) => {
  const totalPayments = payments.length;
  const pendingPayments = payments.filter(payment => payment.status === 'Pending').length;
  const paidPayments = payments.filter(payment => payment.status === 'Paid').length;
  const sortByDate = payments.sort((a, b) => new Date(b.date) - new Date(a.date));
  const recentPayments = sortByDate.slice(0, 5);
  return (
    <div className="payments-summary-widget p-4">
      <h2 className="fw-bold fs-5 mb-2">Payments Summary</h2>
      <SummaryItem label="Total Payments:" value={totalPayments} />
      <SummaryItem label="Pending Payments:" value={pendingPayments} />
      <SummaryItem label="Paid Payments:" value={paidPayments} />
      <div className="recent-requests">
        <h3>Recent Payments</h3>
        {recentPayments.length > 0 ? (
          <table className='requests-table'>
            <thead>
              <tr>
                <th>Date</th>
                <th>Amount</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {recentPayments.map(payment => (
                <tr key={payment.id}>
                  <td>{payment.date}</td>
                  <td>{payment.amount}</td>
                  <td>{payment.address}</td>
                </tr>
              ))}
            </tbody>

          </table>
        ) : (
          <p>No recent payments</p>
        )}
      </div>
    </div>
  );
};

export default PaymentsSummary;
