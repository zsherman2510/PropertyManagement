import React from 'react'
import SummaryItem from '../UIComponents/SummaryItem';
const PropertySummary = () => {
  return (
    <div className="property-summary">
      <SummaryItem title="Total Properties" value={10} color="#E4F2F5"/>
      <SummaryItem title="Vacant Units" value={3} color="#DFF0D8"/>
      <SummaryItem title="Occupied Units" value={7} color="#F5F5F5"/>
      <SummaryItem title="Lease Expirations" value={2} color="#E9E4F0"/>
    </div>
  );
};


export default PropertySummary