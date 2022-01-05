import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', id: 1, number: "39-44-5325323" }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

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
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <p>name: <input value={newName} onChange={handleNameChange} /></p>
          <p>number: <input value={newNumber} onChange={handleNumberChange} /></p>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(person =>
          <p key={person.id}>{person.name} {person.number}</p>
        )}
      </div>
    </div>
  )
}

export default App
