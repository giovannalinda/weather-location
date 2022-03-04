export type Weather = {
  name: string
  wind: {
    speed: string
  }
  main: {
    temp: number
    humidity: string
    temp_max: number
    temp_min: number
  }
  weather: {
    description: string
  }[]
}

export type GetWeatherParams = {
  lat: number
  lng: number
}

export type UseWeatherParams = {
  location?: [number, number]
}
