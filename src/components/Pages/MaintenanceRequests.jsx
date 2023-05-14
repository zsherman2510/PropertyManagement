import React, { useEffect, useState } from 'react'
import TableComponent from '../UIComponents/TableComponent';

const MaintenanceRequests = () => {

  const [ requests, setRequests] = useState([])
  const [ error, setError ] = useState('');

  useEffect(() => {
    const fetchData = async () => {

      try {
        const response  = await fetch('data.json');
        const { maintenanceRequests } = await response.json();
        console.log(maintenanceRequests, 'res');
        setRequests(maintenanceRequests);
      } catch(error) {
        setError(error);
      }
      
    }

    fetchData();
  }, []);

  return (
    <div className="maintenance-requests-widget">
      <h2>Maintenance Requests</h2>
      {requests.length === 0 ? (
        <p>No maintenance requests</p>
      ) : (
        <TableComponent data={requests} />
      )}
    </div>
  );
};

export default MaintenanceRequests