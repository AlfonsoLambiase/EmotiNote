import { useEffect, useState } from "react";
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
    const [influenza, setInfluenza] = useState("");

     const handleChange = (event) => {
    setInfluenza(event.target.value);
  };

  useEffect(() => {
    if (!state) {
      navigate("/"); 
      return;
    }

    const { lat, lon } = state;
    getWeather({ latitude: lat, longitude: lon });
  }, [state, navigate]);

  if (!state) return null;

  return (
    <>
    <div className="flex items-start justify-center h-auto gap-6 px-16 pt-12">
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
          className="bg-orange-400 text-white py-2 px-4 rounded-lg hover:bg-orange-500 transition mt-4"
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


 <div className="flex items-start justify-center h-auto gap-6 px-16 pt-5 py-2 text-center">
  <form className="p-4 bg-white rounded-xl shadow-md border border-gray-200">
    <p className="font-bold text-xl mb-4 mx-4">Quanto ti influenza il meteo di oggi?</p>

    <ul className="flex flex-col items-center gap-3 mb-4 ml-18">
      <li>
        <label className="flex items-center gap-2 w-48 justify-start">
          <input
            type="radio"
            name="meteo"
            value="tanto"
            checked={influenza === "tanto"}
            onChange={handleChange}
          />
          Tanto 👍🏻
        </label>
      </li>

      <li>
        <label className="flex items-center gap-2 w-48 justify-start">
          <input
            type="radio"
            name="meteo"
            value="poco"
            checked={influenza === "poco"}
            onChange={handleChange}
          />
          Poco 🤏🏻
        </label>
      </li>

      <li>
        <label className="flex items-center gap-2 w-48 justify-start">
          <input
            type="radio"
            name="meteo"
            value="niente"
            checked={influenza === "niente"}
            onChange={handleChange}
          />
          Per niente 👎🏻
        </label>
      </li>
    </ul>

    <button
      onClick={() => navigate("/Diario")}
      className="bg-orange-400 text-white py-2 px-4 rounded-lg hover:bg-orange-500 transition">
      Scopri i risultati
    </button>
  </form>
</div>

    </>
  );
};

export default ResultPage;
