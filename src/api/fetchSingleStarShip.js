import axios from 'axios';
import { ROOT } from '../config/config';

export const fetchSingleStarShip = async (id) => {
  const result = await axios.get(ROOT + `/starships/${id}`);
  return result;
};
