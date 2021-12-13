import React, { useState } from 'react';

import { Loader } from '../../components/Loader/Loader';
import { ErrorHandler } from '../../components/ErrorsHandling/ErrorHandler';

import { getData } from '../../components/Api/Api';

import { HomeContent } from './HomeContent';
import './Home.scss';

export const Home = () => {
  const [apiData, setApiData] = useState({});
  const [inputData, setInputData] = useState({});
  const [cityDetails, setCityDetails] = useState({ name: '', country: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value
    })
  }

  const getWeatherData = (e) => {
    e.preventDefault();
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
            setLoading(false);
          })
      }).catch(error => {
        console.log('Error response', error.response);
        console.log('Error status', error.response.status);
        setError(error);
      })
  }

  if (error) return <ErrorHandler error={error} />;

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