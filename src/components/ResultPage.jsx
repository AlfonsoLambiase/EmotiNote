import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useWeather } from "../hook/useWeather";

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
    <div className="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-md border text-center">
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
  );
};

export default ResultPage;
