import axios from 'axios';
import { getKeyValue, TOKEN_DICTIONARY } from './storage.service.js';

export const getWeather = async (city) => {
  const token = await getKeyValue(TOKEN_DICTIONARY.token);
  if (!token) {
    throw new Error("Haven't token, set from command -t [API_KEY]");
  }
  const { data } = await axios.get(
    'https://api.openweathermap.org/data/2.5/weather',
    {
      params: {
        q: city,
        appId: token,
        lang: 'eng',
        units: 'metric',
      },
    }
  );
  return data;
};
