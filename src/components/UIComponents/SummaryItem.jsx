import React from 'react'

const SummaryItem = ({label, value}) => {
  return (
    <div className="summary-item">
        <span className="summary-label">{label}</span>
        <span className="summary-value">{value}</span>
      </div>
  )
}

export default SummaryItem