import React from 'react';
import DashboardWidget from '../UIComponents/DashboardWidget';

const PropertySummary = ({ properties }) => {
  // Count the total number of properties
  const totalProperties = properties.length;

  // Count the number of vacant units
  const vacantUnits = properties.filter((property) => property.occupancyStatus === 'Vacant').length;

  // Count the number of occupied units
  const occupiedUnits = properties.filter((property) => property.occupancyStatus === 'Occupied').length;

  // Count the number of lease expirations
  const leaseExpirations = properties.reduce((count, property) => {
    const { tenants } = property;
    if (tenants.length > 0) {
      const hasExpiredLease = tenants.some((tenant) => new Date(tenant.leaseEnd) <= new Date());
      if (hasExpiredLease) {
        count++;
      }
    }
    return count;
  }, 0);

  return (
    <div className="container property-summary">
      <DashboardWidget title="Total Properties" value={totalProperties} color="#1a73e8" />
      <DashboardWidget title="Vacant Units" value={vacantUnits} color="#1a73e8" />
      <DashboardWidget title="Occupied Units" value={occupiedUnits} color="#1a73e8" />
      <DashboardWidget title="Lease Expirations" value={leaseExpirations} color="#1a73e8" />
    </div>
  );
};

export default PropertySummary;
