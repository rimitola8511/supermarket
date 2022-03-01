import { instance } from '../plugins/axios';

const get = async <T>() => {
  const {
    data: { data },
  } = await instance({
    url: '/729fdd53-f365-49b4-bd55-f7e10bcc9a4b',
    method: 'GET',
  });
  return data as T;
};

export const http = {
  get,
};
