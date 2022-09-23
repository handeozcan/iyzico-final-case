import axios from 'axios';
import { ROOT } from '../config/config';

export const fetchStarShips = async ({ pageParam = 0 }) => {
  const result = await axios.get(ROOT + '/starships?page=' + pageParam);
  return result;
};
