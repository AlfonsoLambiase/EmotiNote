import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";

import sunnyAnimation from "../animation/sunny.json";
import rainyAnimation from "../animation/rainy.json";
import cloudyAnimation from "../animation/cloudy.json";
import snowlyAnimation from "../animation/snowly.json";

const FormLocation = () => {
  const [paese, setPaese] = useState("");
  const [città, setCittà] = useState("");
  const [cap, setCap] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const url = `https://nominatim.openstreetmap.org/search?country=${encodeURIComponent(
      paese
    )}&city=${encodeURIComponent(città)}&postalcode=${encodeURIComponent(
      cap
    )}&format=json`;

    try {
      const response = await fetch(url, {
        headers: {
          "User-Agent": "IlTuoNome/1.0 (email@esempio.com)",
        },
      });

      const data = await response.json();

      if (data.length > 0) {
        const { lat, lon, display_name } = data[0];
        navigate("/risultato", {
          state: {
            lat,
            lon,
            nome: display_name,
          },
        });
      } else {
        setError(true);
      }
    } catch (err) {
      console.error("Errore:", err);
      setError(true);
    }
  };

  return (
    <div className="flex items-start justify-center gap-6 px-4 pt-12">
      {/* Animazioni lato sinistro */}
      <div className="flex flex-col gap-6">
        <Lottie
          animationData={sunnyAnimation}
          loop={true}
          autoplay={true}
          style={{ width: 100, height: 100 }}
        />
        <Lottie
          animationData={rainyAnimation}
          loop={true}
          autoplay={true}
          style={{ width: 100, height: 100 }}
        />
      </div>

      {/* Form al centro */}
      <div className="max-w-xl p-6 bg-white rounded-2xl shadow-md border border-gray-200 text-center">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Paese"
            value={paese}
            onChange={(e) => setPaese(e.target.value)}
            className="m-3 p-1 border"
          />
          <br />
          <input
            type="text"
            placeholder="Città"
            value={città}
            onChange={(e) => setCittà(e.target.value)}
            className="m-3 p-1 border"
          />
          <br />
          <input
            type="text"
            placeholder="CAP"
            value={cap}
            onChange={(e) => setCap(e.target.value)}
            className="m-3 p-1 border"
          />
          <br />
          <button
            type="submit"
            className="bg-orange-400 text-white py-2 px-4 rounded-lg hover:bg-orange-500 transition m-2"
          >
            Cerca
          </button>
        </form>

        {error && <p className="text-red-500 mt-4">Luogo non trovato.</p>}
      </div>

      {/* Animazioni lato destro */}
      <div className="flex flex-col gap-6">
        <Lottie
          animationData={cloudyAnimation}
          loop={true}
          autoplay={true}
          style={{ width: 100, height: 100 }}
        />
        <Lottie
          animationData={snowlyAnimation}
          loop={true}
          autoplay={true}
          style={{ width: 100, height: 100 }}
        />
      </div>
    </div>
  );
};

export default FormLocation;
