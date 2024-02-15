import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://653421eee1b6f4c5904694f4.mockapi.io',
});

export const fetchCars = async () => {
  const { data } = await instance.get('/advert');
  // console.log('data :>> ', data);
  return data;
};
