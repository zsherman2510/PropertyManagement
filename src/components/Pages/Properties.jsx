import React, { useEffect, useState } from 'react'
import TableComponent from '../UIComponents/TableComponent'
import { Modal, Button } from 'react-bootstrap';
const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [error, setError] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

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
    { modalOpen && <Modal show={modalOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>}
    </>
  )
    
}

export default Properties