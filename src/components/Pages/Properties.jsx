import React, { useEffect, useState } from 'react'
import TableComponent from '../UIComponents/TableComponent'
const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('data.json');
        const { properties } = await response.json();

        setProperties(properties);
      } catch(error) {
        setError(error);
      }
    }

    fetchData();
  }, [])
 
  console.log(properties);
  return (
    <div className='table-widget'>
      <h2>Properties</h2>
      {properties.length > 0 ? ( <TableComponent data={properties} />) : ( <p>No properties available</p>)}

    </div>
  )
    
}

export default Properties