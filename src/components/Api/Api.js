import axios from "axios"

const baseURL = 'https://api.openweathermap.org/data/2.5/';

export const getData = path => {
  return axios.get(`${baseURL}${path}&APPID=${process.env.REACT_APP_API_KEY}`);
}