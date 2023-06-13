import React, { useEffect, useState } from 'react'
import TableComponent from '../UIComponents/TableComponent'
import CustomModal from '../UIComponents/CustomModal'
import { TextField, Button } from "@mui/material";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [error, setError] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const [address, setAddress] = useState("");
  const [rent, setRent] = useState("");
  const [occupancyStatus, setOccupancyStatus] = useState("");
  const [propertyValue, setPropertyValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProperty = {
      address,
      rent,
      occupancyStatus,
      propertyValue,
      tenants: [],
    };

    // Call the onSubmit function with the new property object
    onSubmit(newProperty);

    // Reset the form fields
    setAddress("");
    setRent("");
    setOccupancyStatus("");
    setPropertyValue("");
  };

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


  const addProperty = (property) => {
    const newProperty = {
      id: properties.length + 1, // Generate a unique ID for the new property
      address: property.address,
      rent: property.rent,
      occupancyStatus: 'Vacant',
      tenants: property.tenants
    };

    setProperties(prevProperties => [...prevProperties, newProperty]);
  };

  const handleClose = () => setModalOpen(false);
  const handleOpen = () => setModalOpen(true);
 
  console.log(properties);
  return (
    
    <>
    <div className='table-widget'>
      <div className='d-flex justify-content-between'>
        <h2>Properties</h2>
        <div>
          <button className="btn btn-primary" onClick={handleOpen} >Add Property</button>
        </div>
      </div>
      
      <div>
        {properties.length > 0 ? ( <TableComponent data={properties} />) : ( <p>No properties available</p>)}
      </div>
    </div>
    { modalOpen && 
      (
      <CustomModal
        isOpen={modalOpen}
        closeModal={handleClose}
        title='Add Property'
        onSubmit={handleSubmit}
      >
      <TextField
        label="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <TextField
        label="Rent"
        type="number"
        value={rent}
        onChange={(e) => setRent(e.target.value)}
      />
      <TextField
        label="Occupancy Status"
        value={occupancyStatus}
        onChange={(e) => setOccupancyStatus(e.target.value)}
      />
      <TextField
        label="Property Value"
        type="number"
        value={propertyValue}
        onChange={(e) => setPropertyValue(e.target.value)}
      />
        
      </CustomModal>
      
      )}
    </>
  )
    
}

export default Properties