import axios from "axios"
import { useEffect, useState } from "react"


const useWeather = () => {

  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    if(coords !== undefined) {
      const API_KEY = 'd993d119ca66d0a611399e0a7acadf4a'
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${API_KEY}`

      axios.get(URL)
        .then(res => {
          setWeather(res.data)
          
        })
        .catch(err => console.log(err))
        .finally(() => setIsLoading(false))
    }
  }, [coords])

  useEffect(() => {
    const success = pos => {
      const lat = pos.coords.latitude
      const lon = pos.coords.longitude
      setCoords({lat, lon})
    }

    navigator.geolocation.getCurrentPosition(success)
  }, [])

  return {weather, isLoading}
}

export default useWeather