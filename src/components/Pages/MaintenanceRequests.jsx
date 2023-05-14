import React from 'react'
import TableComponent from '../UIComponents/TableComponent';

const MaintenanceRequests = ({ maintenanceRequests }) => {
  return (
    <div className="maintenance-requests-widget">
      <h2>Maintenance Requests</h2>
      {maintenanceRequests.length === 0 ? (
        <p>No maintenance requests</p>
      ) : (
        <TableComponent data={maintenanceRequests} />
      )}
    </div>
  );
};

export default MaintenanceRequests