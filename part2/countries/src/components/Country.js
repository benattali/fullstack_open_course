import React from 'react'
import Weather from './Weather'

const Country = ({ country }) => {
  return (
    <>
      <h2>{country["name"]["common"]}</h2>
      <p>capital {country["capital"]}</p>
      <p>population {country["population"]}</p>
      <p>languages</p>
      <ul>
        {Object.values(country["languages"]).map(lang => <li key={lang}>{lang}</li>)}
      </ul>
      <img src={country["flags"]["png"]} alt={`flag of ${country["name"]["common"]}`} />
      <Weather country={country["name"]["common"]} city={country["capital"]} />
    </>
  )
}

export default Country
