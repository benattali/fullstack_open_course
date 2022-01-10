import React from 'react'
import personServices from '../services/persons';

const Persons = ({ personsToShow, persons, setPersons, setErrorMessage }) => {
  const removePerson = id => {
    if (!window.confirm("delete this person?")) {
      return null
    }

    personServices
      .remove(id)
      .then(() => {
        setPersons(persons.filter(person => person.id !== id))
      })
      .catch(error => {
        setErrorMessage(
          `${id} was already removed from server`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
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
