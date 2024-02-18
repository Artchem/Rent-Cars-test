import axios from 'axios';

const instance = axios.create({
  baseURL: '//65d1182bab7beba3d5e41626.mockapi.io',
});

export const fetchCars = async (page = 1) => {
  const { data } = await instance.get(`/adverts?page=${page}&limit=12`);
  // console.log('data :>> ', data);
  return data;
};
