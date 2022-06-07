import React from 'react'

const CardWeather = ({weather}) => {
  return (
    <div className='card'>
      <h2>{weather?.name}</h2>
      <img 
        src={weather && `http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} 
        alt="icon weather condition" 
      />
      <h3>{weather?.weather[0].description}</h3>
    </div>
  )
}

export default CardWeather