import React from 'react'

const PersonForm = (props) => {
  const {
    persons,
    newName,
    newNumber,
    setPersons,
    setNewName,
    setNewNumber,
  } = props
  const handleSubmit = (event) => {
    event.preventDefault()
    let exists = false

    persons.forEach(person => {
      if (person.name === newName) {
        alert(`${newName} already exists in the phonebook`)
        exists = true
      }
    })

    if (exists) {
      return
    }

    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }

    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <p>name: <input value={newName} onChange={handleNameChange} /></p>
        <p>number: <input value={newNumber} onChange={handleNumberChange} /></p>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm
