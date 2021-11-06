import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Logo from './assets/logo.svg'

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
    console.log(result.data)
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeather(position.coords.latitude, position.coords.longitude)
      setLocation(true)
    })
  }, [])

  const dayName = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']
  const now = new Date()

  if (location === false) {
    return (
      <>
        Você precisa habilitar a localização no browser
      </>
    )
  } else if (weather === false) {
    return (
      <>
        <h3>Carregando o clima...</h3>
      </>
    )
  } else {
    return (
      <>
        <img src={Logo} alt='Logo' />
        <h3>Detalhes do clima</h3>
        <h4>{weather.main.temp.toFixed(0)}°C</h4>
        <p>{weather.weather[0].description}</p>
        <ul>
          <li>{weather.name}</li>
          <li>{dayName[now.getDay()]}</li>
          <li>Vento: <strong>{weather.wind.speed}</strong>km/h</li>
          <li>Umidade: <strong>{weather.main.humidity}%</strong> </li>
          <li>Temperatura máxima: <strong>{weather.main.temp_max.toFixed(0)}°C</strong></li>
          <li>Temperatura mínima: <strong>{weather.main.temp_min.toFixed(0)}°C</strong></li>
        </ul>
      </>
    )
  }
}

export default App
