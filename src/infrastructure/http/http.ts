import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',
};

const instance = axios.create({
  baseURL: 'https://run.mocky.io/v3/729fdd53-f365-49b4-bd55-f7e10bcc9a4b',
  headers,
});

const get = async <T>() => {
  const {
    data: { data },
  } = await instance({
    method: 'GET',
  });
  return data as T;
};

export const http = {
  get,
};
