import React from "react";

import { Card } from "../../components/Card/Card";
import { Footer } from "../../components/Footer/Footer";
import { Form } from "../../components/Form/Form";
import { Input } from "../../components/Input/Input";

import './Home.scss';

export const HomeContent = ({ getWeatherData, handleInput, apiData, cityDetails }) => {
  return (
    <div className='container'>
      <div className='form-container'>
        <h1 className='header'>React Weather App</h1>

        <Form 
          onSubmit={getWeatherData} 
          className='form'
        >
          <Input
            type='text'
            name='city'
            placeholder='Enter location'
            onChange={handleInput}
            className='input'
          />
        </Form>

        {Object.keys(apiData).length > 0 &&
          <Card city={cityDetails} data={apiData} />
        }
      </div>

      <Footer/>
    </div>
  )
}