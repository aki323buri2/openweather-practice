import { useEffect, useState } from "react"

// https://youtu.be/m6VB7QzZCh0

const API_KEY = "913ef1b776bb023672fbbc6219afd08d"
const URL = "https://api.openweathermap.org/data/2.5/weather"

export function useWeather() {
  const [weather, setWeather] = useState({})
  
  const setSearch = async search => {
    fetch(`${URL}?q=${search}&units=metric&appid=${API_KEY}`)
      .then(res => res.json())
      .then(data => setWeather(data))
  }

  return {
    weather, 
    setSearch, 
  }
}