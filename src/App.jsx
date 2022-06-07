import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CardCounter from './components/CardCounter'
import CardWeather from './components/CardWeather'
import Loader from './components/Loader'
import useWeather from './hooks/useWeather'

function App() {
  
  const {weather, isLoading} = useWeather()

  return (
    <div className="App">
      {
        isLoading ?
          <Loader />
        :
          <CardWeather weather={weather} />
      }
    </div>
  )
}

export default App
