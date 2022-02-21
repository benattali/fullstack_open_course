import React from 'react'
import personServices from '../services/persons';

const Persons = ({ personsToShow, persons, setPersons, notify }) => {
  const removePerson = id => {
    if (!window.confirm("delete this person?")) {
      return null
    }

    const toDelete = persons.find(p => p.id === id)

    personServices
      .remove(id)
      .then(() => {
        setPersons(persons.filter(person => person.id !== id))
        notify(`Deleted ${toDelete.name}`, 'alert')
      })
  }

  return (
    <div>
      {personsToShow.map(person =>
        <li key={person.id} className='person'>
          {person.name} {person.number}
          <button onClick={() => removePerson(person.id)}>delete</button>
        </li>
      )}
    </div>
  )
}

export default Persons
