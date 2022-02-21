import React from 'react'

const Filter = ({ newFilter, setNewFilter }) => {
  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  return (
    <p>search for <input value={newFilter} onChange={handleFilterChange} /></p>
  )
}

export default Filter
