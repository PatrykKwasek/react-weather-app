import React from "react";

import { Button } from "../../components/Button/Button";
import { Card } from "../../components/Card/Card";
import { Footer } from "../../components/Footer/Footer";
import { Form } from "../../components/Form/Form";
import { Input } from "../../components/Input/Input";

import './Home.scss';

export const HomeContent = ({getWeatherData, handleInput, apiData, cityDetails}) => {
  return (
    <div className='container'>
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
            onClick={getWeatherData}
            type='button'
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