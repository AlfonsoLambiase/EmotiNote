import { useEffect } from "react";
import useCurrentLocation from "../hook/useCurrentLocation";
import { useWeather } from "../hook/useWeather";
import { FormDiario } from "../components/FormDiario";

const Today = ({ onDaySubmit }) => {
  const { location, getLocation } = useCurrentLocation();
  const { getWeather, meteo, error, loading } = useWeather();

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    if (location) {
      console.log(location);
      getWeather(location);
    }
  }, [location]);

  console.log(meteo);

  const onSubmit = (data) => {
    const day = {
      ...data,
      temperature: meteo.current_weather.temperature,
      code: meteo.current_weather.weathercode,
      day: new Date(),
    };
    console.log(day);
    onDaySubmit(day);
  };

  return (
    <>
      <p>Today</p>
      <FormDiario onSubmit={onSubmit} />
    </>
  );
};
export default Today;
