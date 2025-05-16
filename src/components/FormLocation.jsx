import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <div className="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-md border text-center">
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
  );
};

export default FormLocation;
