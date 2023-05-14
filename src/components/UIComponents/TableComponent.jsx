import React from 'react'

const TableComponent = ({data}) => {
  console.log(data, 'data')
  const headers = Object.keys(data[0]);
  return (
    <table className='requests-table'>
    <thead>
      {headers.map((header) => (
        <td>{header}</td>
      ))}
    </thead>
    <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {Object.keys(row).map((property, propertyIndex) => (
              <td key={propertyIndex}>{row[property]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    
  </table>
  )
}

export default TableComponent