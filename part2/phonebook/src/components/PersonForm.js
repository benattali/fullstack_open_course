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
    notify,
  } = props

  const handleSubmit = (event) => {
    event.preventDefault()

    const allNames = persons.map(person => person.name)
    const personObject = {
      name: newName,
      number: newNumber,
    }

    if (allNames.includes(newName)) {
      if (!window.confirm(`${newName} already exists. Replace with new info?`)) {
        return null
      }
      const personId = persons.find(person => person.name === newName).id
      personServices
        .update(personId, personObject)
        .then(returnedPerson => {
          setPersons(persons.map(person => person.id !== personId ? person : returnedPerson))
          setNewName('')
          setNewNumber('')
          notify(`Updated info of ${returnedPerson.name}`)
        })
        .catch(error => {
          notify(error.response.data.error, 'alert')
        })
    } else {
      personServices
       .create(personObject)
       .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
          notify(`Added ${returnedPerson.name}`)
        })
        .catch(error => {
          notify(error.response.data.error, 'alert')
        })
    }
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
