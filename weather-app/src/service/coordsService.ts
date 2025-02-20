import axios from 'axios';

const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
const GEO_URL = 'http://api.openweathermap.org/geo/1.0/direct';

export const fetchCoordinates = async (city: string) => {
  try {
    const response = await axios.get(GEO_URL, {
      params: {
        q: city,
        limit: 1, // Get only the first (most relevant) result
        appid: API_KEY,
      },
    });

    if (response.data.length === 0) {
      throw new Error('City not found');
    }

    return {
      lat: response.data[0].lat,
      lon: response.data[0].lon,
    };
  } catch (error) {
    console.error('Error fetching coordinates:', error);
    throw error;
  }
};
