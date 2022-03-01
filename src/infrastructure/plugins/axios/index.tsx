import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',
};

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers,
});
