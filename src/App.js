import React, { useState, useEffect } from 'react'
import axios from 'axios'

function App () {
  const [location, setLocation] = useState(false)
  const [weather, setWeather] = useState(false)

  const getWeather = async (lat, long) => {
    const result = await axios.get('http://api.openweathermap.org/data/2.5/weather', {
      params: {
        lat: lat,
        lon: long,
        appid: process.env.REACT_APP_OPEN_WHEATHER_KEY,
        lang: 'pt',
        units: 'metric',
      },
    })
    setWeather(result.data)
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeather(position.coords.latitude, position.coords.longitude)
      setLocation(true)
    })
  }, [])

  if (location === false) {
    return (
      <>
        Voce precisa habilitar a localização no browser
      </>
    )
  } else if (weather === false) {
    return (
      <>
        <h3>Carregando o clima</h3>
      </>
    )
  } else {
    return (
      <>
        <h3>Clima nas suas coordenadas({weather.weather[0].description})</h3>
        <ul>
          <li>Temperatura atual: {weather.main.temp}°</li>
          <li>Temperatura máxima: {weather.main.temp_max}°</li>
          <li>Temperatura mínima: {weather.main.temp_min}°</li>
          <li>Pressão: {weather.main.pressure}hpa</li>
          <li>Umidade: {weather.main.humidity}%</li>
        </ul>
      </>
    )
  }
}

export default App
/*

*/
