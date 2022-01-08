import React from 'react'

const Display = ({ display, setCountries }) => {
  if (display.constructor === String) {
    return (<p>{display}</p>)
  }

  return (
    <>
      {display.map(country => {
        return (
          <p key={country["name"]["common"]}>
            {country["name"]["common"]}
            <button onClick={() => {setCountries([country])}}>show</button>
          </p>
        )
      })}
    </>
  )
}

export default Display
