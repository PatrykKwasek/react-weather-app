import React, { useState } from 'react';

import axios from 'axios';

import { Button } from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';
import { Card } from '../../components/Card/Card';
import { Form } from '../../components/Form/Form';
import { Loader } from '../../components/Loader/Loader';
import { Image } from '../../components/Image/Image';
import { Footer } from '../../components/Footer/Footer';
import { convertTimeToHumanDate } from '../../helpers/convertTimeToHumanDate';
import './Home.scss';

const APIKEY =`${process.env.REACT_APP_API_KEY}`;

export const Home = () => {
  const [apiData, setApiData] = useState({});
  const [inputData, setInputData] = useState({});
  const [cityDetails, setCityDetails] = useState({ name: '', country: '' });
  const [loading, setLoading] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value
    })
  }

  const getData = () => {
    // Show Loader when call API
    setLoading(true);
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${inputData.city}&units=metric&APPID=${APIKEY}`)
      .then(response => {
        setCityDetails({
          name: response.data.name,
          country: response.data.sys.country
        })
        axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${response.data.coord.lat}&lon=${response.data.coord.lon}&exclude=minutely&units=metric&appid=${APIKEY}`)
          .then(response => {
            setApiData(response.data);
            // Hide Loader when call API ended
            setLoading(false);
          })
      })
  }

  const content = () => (
    <div className='container'>
      {/* Check api response */}
      {console.log('apiData', apiData)}
      <div className='form-container'>
        <h2>React Weather App</h2>

        <Form>
          <Input
            type='text'
            name='city'
            placeholder='Enter location'
            onChange={handleInput}
          />

          <Button
            txt='Submit'
            onClick={getData}
            type='button'
          />
        </Form>
      </div>

      {Object.keys(apiData).length > 0 &&
        <Card city={cityDetails} data={apiData} />
      }

      {Object.keys(apiData).length > 0 && (
        <div>
          {apiData.daily.slice(1).map((item) => (
            <div>
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
      )}

      <Footer/>
    </div>
  )

  const setContent = loading ? <Loader /> : content();

  return <>{setContent}</>;
}