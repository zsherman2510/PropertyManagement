import React from 'react'

const MaintenanceRequests = ({ maintenanceRequests }) => {
  console.log(maintenanceRequests, 'maintancerequests')
  return (
    <div className="maintenance-requests-widget">
      <h2>Maintenance Requests</h2>
      {maintenanceRequests.length === 0 ? (
        <p>No maintenance requests</p>
      ) : (
        <ul>
          {maintenanceRequests.map((maintenanceRequests, index) => (
            <li key={index}>
              <span className="property">{maintenanceRequests.address}</span>
              <span className="date">{maintenanceRequests.description}</span>
              <span className="status">{maintenanceRequests.status}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MaintenanceRequests