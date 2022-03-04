import Logo from './assets/logo.svg'
import { useLocation, useWeather } from './hooks'

const weekDays = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado',
]

function App () {
  const location = useLocation()
  const { weather, isLoading } = useWeather({ location })

  const nowDay = new Date().getDay()
  const weekDayName = weekDays[nowDay]

  if (!location) {
    return <h1>Você precisa habilitar a localização no navegador.</h1>
  }

  if (isLoading) {
    return <h1>Carregando o clima...</h1>
  }

  return (
    <>
      <img src={Logo} alt='Logo' />
      <h3>Detalhes do clima</h3>
      <h4>{weather.actualTemperature?.toFixed(0)}°C</h4>
      <p>{weather.description}</p>
      <ul>
        <li>{weather.name}</li>
        <li>{weekDayName}</li>
        <li>
          Vento:{' '}
          <strong>{weather.speed}</strong>km/h
        </li>
        <li>
          Umidade:{' '}
          <strong>{weather.humidity}%</strong>
        </li>
        <li>
          Temperatura máxima:{' '}
          <strong>
            {weather.maxTemperature?.toFixed(0)}°C
          </strong>
        </li>
        <li>
          Temperatura mínima:{' '}
          <strong>
            {weather.minTemperature?.toFixed(0)}°C
          </strong>
        </li>
      </ul>
    </>
  )
}

export default App
