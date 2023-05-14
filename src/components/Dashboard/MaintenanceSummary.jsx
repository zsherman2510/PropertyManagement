import React from "react";
import SummaryItem from "../UIComponents/SummaryItem";

const MaintenanceSummaryWidget = ({ maintenanceRequests }) => {
  const totalRequests = maintenanceRequests.length;
  const openRequests = maintenanceRequests.filter(
    (request) => request.status === "Open"
  ).length;
  const inProgressRequests = maintenanceRequests.filter(
    (request) => request.status === "In Progress"
  ).length;
  const highPriorityRequests = maintenanceRequests.filter(
    (request) => request.priority === "High"
  ).length;
  const recentRequests = maintenanceRequests.slice(0, 5); // Show the 5 most recent requests

  return (
    <div className="maintenance-summary-widget">
      <h2 className="fw-bold fs-5 mb-2">Maintenance Summary</h2>
      <div className="w-80">
        <SummaryItem label="Total Requests:" value={totalRequests} />
        <SummaryItem label="Open Requests:" value={openRequests} />
        <SummaryItem label="In Progress Requests:" value={inProgressRequests} />
        <SummaryItem
          label="High Priority Requests:"
          value={highPriorityRequests}
        />
      </div>

      <div className="recent-requests">
        <h3>Recent Requests</h3>
        {recentRequests.length > 0 ? (
          <table className="requests-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Address</th>
                <th>Description</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentRequests.map((request) => (
                <tr key={request.id}>
                  <td>{request.id}</td>
                  <td>{request.address}</td>
                  <td>{request.description}</td>
                  <td>{request.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No recent requests</p>
        )}
      </div>
    </div>
  );
};

export default MaintenanceSummaryWidget;
