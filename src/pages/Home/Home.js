import React, { useState } from 'react';

import axios from 'axios';

import { Button } from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';
import { Card } from '../../components/Card/Card';
import { Form } from '../../components/Form/Form';
import { Loader } from '../../components/Loader/Loader';
import './Home.scss';

const APIKEY = 'cc0ad0a75d9e430f381b14640d51593b';

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
      <div className='form-container'>
        <Form>
          <Input
            type='text'
            name='city'
            placeholder='Enter city'
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
    </div>
  )

  const setContent = loading ? <Loader /> : content();

  return <>{setContent}</>;
}