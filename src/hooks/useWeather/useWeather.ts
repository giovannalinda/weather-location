import { useState, useEffect } from 'react'

import { api } from '../../services'

import type { Weather, GetWeatherParams, UseWeatherParams } from './types'

async function getWeather ({ lat, lng }: GetWeatherParams) {
  const response = await api.get<Weather>('/weather', {
    params: {
      lat,
      lon: lng,
      appid: process.env.REACT_APP_OPEN_WHEATHER_KEY,
      lang: 'pt',
      units: 'metric',
    },
  })

  return response.data
}

export function useWeather ({ location: [lat, lng] = [0, 0] }: UseWeatherParams) {
  const [isLoading, setIsLoading] = useState(true)
  const [weather, setWeather] = useState<Weather>()

  useEffect(() => {
    async function loadWeather () {
      try {
        const weatherResult = await getWeather({ lat, lng })

        setWeather(weatherResult)
      } catch (error) {
        console.log('try error', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadWeather()
  }, [lat, lng])

  return {
    isLoading,
    weather: {
      name: weather?.name,
      description: weather?.weather[0].description,
      speed: weather?.wind.speed,
      actualTemperature: weather?.main.temp.toFixed(0),
      maxTemperature: weather?.main.temp_max?.toFixed(0),
      minTemperature: weather?.main.temp_min.toFixed(0),
      humidity: weather?.main.humidity,
    },
  }
}
