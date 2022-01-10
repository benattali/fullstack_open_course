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
    setErrorMessage,
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
      console.log(personId);
      personServices
        .update(personId, personObject)
        .then(returnedPerson => {
          setPersons(persons.map(person => person.id !== personId ? person : returnedPerson))
          setNewName('')
          setNewNumber('')
          setErrorMessage(
            `${newName} was updated`
          )
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
        })
    } else {
      personServices
       .create(personObject)
       .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
          setErrorMessage(
            `${newName} was created`
          )
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
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
