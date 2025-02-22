import axios from "axios";

const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/forecast";

export const fetchWeatherData = async (
  city: string,
  unit: "metric" | "imperial" = "metric"
) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: city,
        appid: API_KEY,
        units: unit, // 'metric' for Celsius, 'imperial' for Fahrenheit
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};
