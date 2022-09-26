import axios from 'axios';
import { baseURL } from '../config/config';

export const fetchStarShips = async (page) => {
  const { data } = await axios.get(baseURL + '/starships?page=' + page);
  return data;
};
