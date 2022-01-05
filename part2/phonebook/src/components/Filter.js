import React from 'react'

const Filter = ({ newFilter, setNewFilter, setShowAll }) => {
  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
    setShowAll(false)
  }

  return (
    <p>search for <input value={newFilter} onChange={handleFilterChange} /></p>
  )
}

export default Filter
