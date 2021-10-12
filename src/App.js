import React, { useState, useEffect } from 'react'
import axios from 'axios'
import * as S from './styles/styles'
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
        <img src={Logo} alt='Logo' />
        <h3>Detalhes do clima</h3>
        <p>{weather.weather[0].description}</p>
        <ul>
          <li>{dayName[now.getDay()]}</li>
          <li>{weather.name}</li>
          <li>{weather.main.temp.toFixed(0)}°C</li>
          <li>Temperatura máxima: {weather.main.temp_max.toFixed(0)}°C</li>
          <li>Temperatura mínima: {weather.main.temp_min.toFixed(0)}°C</li>
          <li>Vento: {weather.wind.speed}km/h</li>
          <li>Umidade: {weather.main.humidity}%</li>
        </ul>
      </>
    )
  }
}

export default App
