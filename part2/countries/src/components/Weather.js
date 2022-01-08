import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Weather = ({ country, city }) => {
  const [weather, setWeather] = useState()

  useEffect(() => {
    axios
      .get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${city},${country}`)
      .then(response => {
        setWeather(response.data);
      })
  }, [country])

  if (!weather) {
    return null
  }

  return (
    <>
      <h3>weather in {city}</h3>
      <p>temperature: {weather.current.temperature}</p>
      <img src={weather.current.weather_icons[0]} alt={weather.current.weather_description} />
      <p>wind {weather.current.wind_speed} kmh direction {weather.current.wind_dir}</p>
    </>
  )
}

export default Weather
