import axios from 'axios';
import { ROOT } from '../config/config';

export const fetchStarShips = async (page) => {
  const { data } = await axios.get(ROOT + '/starships?page=' + page);
  return data;
};
