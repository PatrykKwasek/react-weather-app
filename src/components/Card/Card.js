import React from 'react';

import { Image } from '../Image/Image';

export const Card = ({ city, data }) => {
  return (
    <div>
      <p>{city.name} <sup>{city.country}</sup></p>
      <p>{Math.round(data.current.temp)}<sup>o</sup>C</p>
      <Image src={`http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`} alt={''} />
      <p>{data.current.weather[0].description.toUpperCase()}</p>

      <div>
        <p>Speed: {data.current.wind_speed}km/h</p>
        <p>Humidity: {data.current.humidity}%</p>
        <p>Pressure: {data.current.pressure} HPa</p>
      </div>
    </div>
  )
}