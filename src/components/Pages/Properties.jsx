import React from 'react'
import TableComponent from '../UIComponents/TableComponent'
const Properties = ({ properties }) => {
  console.log(properties, 'properties')
  return (
    <div>properites</div>
  //   <div>
  //   <h2>Properties</h2>
  //   {properties.length > 0 ? ( <TableComponent data={properties} />) : ( <p>No tenants available</p>)}
  // </div>
  )
}

export default Properties