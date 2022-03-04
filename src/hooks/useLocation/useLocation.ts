import { useState, useEffect } from 'react'

export function useLocation () {
  const [location, setLocation] = useState<[number, number]>()

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude
      const lng = position.coords.longitude

      setLocation([lat, lng])
    })
  }, [])

  return location
}
