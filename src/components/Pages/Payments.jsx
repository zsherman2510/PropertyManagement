import React, { useState, useEffect } from 'react'
import TableComponent from '../UIComponents/TableComponent'

const Payments = () => {

  const [ payments, setPayments] = useState([])
  const [ error, setError ] = useState('');

  useEffect(() => {
    const fetchData = async () => {

      try {
        const response  = await fetch('data.json');
        const { payments } = await response.json();
        setPayments(payments);
      } catch(error) {
        setError(error);
      }
      
    }

    fetchData();
  }, []);

  return (
    <div className="table-widget">
      <h2>Payments</h2>
      {payments.length === 0 ? (
        <p>No Payments</p>
      ) : (
        <TableComponent data={payments} />
      )}
    </div>
  )
}

export default Payments