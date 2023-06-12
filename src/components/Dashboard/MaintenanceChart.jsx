import React from "react";
import { Pie } from "react-chartjs-2";

const MaintenanceRequestsChart = ({ maintenanceRequests }) => {
  // Count the number of requests for each status
  const statusCounts = {
    Open: 0,
    "In Progress": 0,
    Closed: 0,
  };

  // Count the number of requests for each priority
  const priorityCounts = {
    Low: 0,
    Medium: 0,
    High: 0,
  };

  // Calculate the counts
  maintenanceRequests.forEach((request) => {
    statusCounts[request.status]++;
    priorityCounts[request.priority]++;
  });

  // Prepare data for the chart
  const statusData = {
    maintainAspectRatio: true,
    labels: Object.keys(statusCounts),
    datasets: [
      {
        label: "Status",
        data: Object.values(statusCounts),
        backgroundColor: [
          "#1a73e8", // Blue
          "rgba(255, 206, 86, 0.5)", // Yellow
          "#4caf50", // Green
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)", // Blue
          "rgba(255, 206, 86, 1)", // Yellow
          "rgba(75, 192, 192, 1)", // Green
        ],
        borderWidth: 1,
      },
    ],
  };


  return (
    <div className="dashboard-background p-3 align-self-center">
      <h2 className="font-bold mb-3 text-center">Maintenance Requests - Status</h2>
      <div className="my-4">
        <Pie id="custom-pie" data={statusData} />
      </div>
    </div>
  );
};

export default MaintenanceRequestsChart;
