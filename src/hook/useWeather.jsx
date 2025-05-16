import { useState } from "react";
import WeatherCodes from "../assets/weathercodes.json"


export const useWeather = () => {
 

    const [meteo, setMeteo] = useState();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const getWeather = async ({latitude, longitude}) => {
      try {
        setError(false);
        setLoading(true);
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
        );
        const data = await response.json();
        setMeteo(data);
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    const getWeatherDescription = (code) => {
     const result = WeatherCodes.translations.find((value) => value.code == code)
     if (result){
      return result.description
     } 
    }

  return { getWeather, getWeatherDescription, meteo, error, loading };
};

