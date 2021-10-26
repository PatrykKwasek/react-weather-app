import React from 'react';

import { Image } from '../Image/Image';
import { convertTimeToHumanDate } from '../../helpers/convertTimeToHumanDate';

export const Card = ({ city, data }) => {
  return (
    <div className='data-container'>
      <div className='card-container'>
        <p>
          {city.name} <sup className='country_id'>{city.country}</sup>

        </p>

        <p>
          {Math.round(data.current.temp)}<sup>o</sup>C
        </p>

        <Image 
          src={`http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`} 
          alt={data.current.weather[0].description} 
        />

        <p>{data.current.weather[0].description.toUpperCase()}</p>

        <div>
          <p>Wind: {data.current.wind_speed}km/h</p>
          <p>Humidity: {data.current.humidity}%</p>
          <p>Pressure: {data.current.pressure} HPa</p>
        </div>
      </div>

      <div className='weather-forecast-container'>
        {data.daily.slice(1).map((item, index) => (
          <div key={index} className='day-week-item'>
            <h3>{convertTimeToHumanDate(item.dt)}</h3>

            <Image 
              src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} 
              alt={item.weather[0].description} 
            />

            <div>
              <p>
                <span>
                  {Math.round(item.temp.max)}<sup>o</sup>
                </span>

                <span>
                  {Math.round(item.temp.min)}<sup>o</sup>
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}