import axios from 'axios';
import { baseURL } from '../config/config';

export const fetchSingleStarShip = async (id) => {
  const result = await axios.get(baseURL + `/starships/${id}`);
  return result;
};
