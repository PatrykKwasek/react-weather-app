import React, { useState } from 'react';

import { Loader } from '../../components/Loader/Loader';

import { getData } from '../../components/Api/Api';

import { HomeContent } from './HomeContent';
import './Home.scss';

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

  const getWeatherData = () => {
    // Show Loader when call API
    setLoading(true);
    getData(`weather?q=${inputData.city}&units=metric`)
      .then(response => {
        setCityDetails({
          name: response.data.name,
          country: response.data.sys.country
        })
        getData(`onecall?lat=${response.data.coord.lat}&lon=${response.data.coord.lon}&exclude=minutely&units=metric`)
          .then(response => {
            setApiData(response.data);
            // Hide Loader when call API ended
            setLoading(false);
          })
      })
  }

  const content = () => (
    <HomeContent 
      getWeatherData={getWeatherData}
      handleInput={handleInput}
      apiData={apiData}
      cityDetails={cityDetails}
    />
  )

  const setContent = loading ? <Loader /> : content();

  return <>{setContent}</>;
}