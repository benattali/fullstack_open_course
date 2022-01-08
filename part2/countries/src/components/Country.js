import React from 'react'

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
    </>
  )
}

export default Country
