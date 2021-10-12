import React, { useState, useEffect } from 'react'
import axios from 'axios'

function App () {
  const [location, setLocation] = useState(false)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords.latitude)
      console.log(position.coords.longitude)
      setLocation(true)
    })
  }, [])

  return (
    <>
      <h3>Clima nas suas coordenadas</h3>
      <ul>
        <li>Temperatura atual: x°</li>
        <li>Temperatura máxima: x°</li>
        <li>Temperatura mínima: x°</li>
        <li>Pressão: x hpa</li>
        <li>Umidade: x%</li>
      </ul>
    </>
  )
}

export default App
