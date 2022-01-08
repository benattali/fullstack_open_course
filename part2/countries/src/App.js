import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Country from './components/Country'

const App = () => {
  const [allCountries, setAllCountries] = useState([])
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setAllCountries(response.data)
      })
  }, [])

  const handleCountryChange = (event) => {
    setFilter(event.target.value)

    if (event.target.value === '') {
      setCountries([])
      return
    }

    const filteredCountries = allCountries.filter(country => country["name"]["common"].toLowerCase().includes(event.target.value))
    setCountries(filteredCountries)
  }

  let display
  let showCountry = false
  if (countries.length > 10) {
    display = <p>too many matches, specify another filter</p>
  } else if (countries.length > 1) {
    display = countries.map(country => <p key={country["name"]["common"]}>{country["name"]["common"]}</p>)
  } else if (countries.length === 1) {
    showCountry = true
  } else {
    display = <p>search for a country</p>
  }

  return (
    <div>
      <p>find countries <input value={filter} onChange={handleCountryChange} /></p>
      {!showCountry && display}
      {showCountry && <Country country={countries[0]} />}
    </div>
  )
}

export default App
