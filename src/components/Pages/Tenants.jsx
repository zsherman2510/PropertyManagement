import React from 'react'
import TableComponent from '../UIComponents/TableComponent'

const Tenants = ({ tenants }) => {
  return (
    <div>
      <h2>Tenants</h2>
      {tenants.length > 0 ? ( <TableComponent data={tenants} />) : ( <p>No tenants available</p>)}
    </div>
  )
}

export default Tenants