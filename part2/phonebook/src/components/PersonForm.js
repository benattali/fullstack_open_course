import React from 'react'
import personServices from '../services/persons'

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

    personServices
    .create(personObject)
    .then(returnedPerson => {
      setPersons(persons.concat(returnedPerson))
      setNewName('')
      setNewNumber('')
    })
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
