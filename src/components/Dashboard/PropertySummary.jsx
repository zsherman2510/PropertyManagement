import React from 'react'
import DashboardWidget from '../UIComponents/DashboardWidget';
const PropertySummary = () => {
  return (
    <div className="container property-summary">
      <DashboardWidget title="Total Properties" value={10} color="#E4F2F5"/>
      <DashboardWidget title="Vacant Units" value={3} color="#DFF0D8"/>
      <DashboardWidget title="Occupied Units" value={7} color="#F5F5F5"/>
      <DashboardWidget title="Lease Expirations" value={2} color="#E9E4F0"/>
    </div>
  );
};


export default PropertySummary