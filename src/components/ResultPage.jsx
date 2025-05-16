import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useWeather } from "../hook/useWeather";
import Lottie from "lottie-react";

import sunnyAnimation from "../animation/sunny.json";
import rainyAnimation from "../animation/rainy.json";
import cloudyAnimation from "../animation/cloudy.json";
import snowlyAnimation from "../animation/snowly.json";

const ResultPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { getWeather, getWeatherDescription, meteo, error, loading } = useWeather();

  useEffect(() => {
    if (!state) {
      navigate("/"); // se l'utente arriva qui per errore
      return;
    }

    const { lat, lon } = state;
    getWeather({ latitude: lat, longitude: lon });
  }, [state, getWeather, navigate]);

  if (!state) return null;

  return (
    <div className="flex items-start justify-center min-h-screen gap-6 px-16 pt-12">
      {/* Colonna animazioni a sinistra */}
      <div className="flex flex-col gap-6">
        <Lottie
          animationData={sunnyAnimation}
          loop
          autoplay
          style={{ width: 100, height: 100 }}
        />
        <Lottie
          animationData={rainyAnimation}
          loop
          autoplay
          style={{ width: 100, height: 100 }}
        />
      </div>

      {/* Contenitore centrale */}
      <div className="max-w-2xl p-6 bg-white rounded-2xl shadow-md border border-gray-200 text-center">
        <h2 className="text-xl font-bold mb-2">Luogo trovato:</h2>
        <p>{state.nome}</p>

        {loading && <p className="mt-4">Caricamento meteo...</p>}

        {error && <p className="text-red-500 mt-4">Errore nel recupero del meteo.</p>}

        {meteo && meteo.current_weather && (
          <div className="mt-4">
            <h2 className="text-lg font-semibold">Meteo attuale:</h2>
            <p>
              Temperatura: {meteo.current_weather.temperature}°C<br />
              Condizione: {getWeatherDescription(meteo.current_weather.weathercode)}
            </p>
          </div>
        )}

        <button
          onClick={() => navigate("/FormLocation")}
          className="bg-orange-400 text-white py-2 px-4 rounded-lg hover:bg-orange-500 transition m-2"
        >
          Torna alla ricerca
        </button>
      </div>

      {/* Colonna animazioni a destra */}
      <div className="flex flex-col gap-6">
        <Lottie
          animationData={cloudyAnimation}
          loop
          autoplay
          style={{ width: 100, height: 100 }}
        />
        <Lottie
          animationData={snowlyAnimation}
          loop
          autoplay
          style={{ width: 100, height: 100 }}
        />
      </div>
    </div>
  );
};

export default ResultPage;
