import { useContext, useState, useEffect } from "react";
import { DiarioContext } from "../App";
import writingAnimation from '../animation/writing.json';
import Lottie from 'lottie-react';
import { FiTrash2 } from "react-icons/fi";

const Diario = () => {
  const diarioContext = useContext(DiarioContext);
  const [entries, setEntries] = useState([]);

  // Carica dal localStorage all'avvio
  useEffect(() => {
    const stored = localStorage.getItem("diario");
    if (stored) {
      setEntries(JSON.parse(stored));
    } else {
      setEntries(diarioContext);
    }
  }, [diarioContext]);

  // Gestione eliminazione con aggiornamento localStorage
  const handleDelete = (indexToDelete) => {
    const updated = entries.filter((_, index) => index !== indexToDelete);
    setEntries(updated);
    localStorage.setItem("diario", JSON.stringify(updated));
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-md border border-gray-200 text-center">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Diario</h1>
      <div className="text-left">
        {entries.map((value, index) => (
          <div
            key={index}
            className="group relative mb-4 p-3 border border-gray-100 rounded-lg hover:bg-gray-50"
          >
            <p>
              <strong>{value.mood}</strong> — <span className="text-gray-600">{value.timestamp}</span>
            </p>
            <p className="mt-1 text-gray-700 whitespace-pre-wrap">{value.note}</p>

            <button
              onClick={() => handleDelete(index)}
              className="absolute top-2 right-2 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Delete entry"
            >
              <FiTrash2 size={18} />
            </button>
          </div>
        ))}
      </div>

      <div className="fit-content">
        <Lottie 
          animationData={writingAnimation} 
          loop={true} 
          autoplay={true} 
          style={{ width: 200, height: 200, margin: "0 auto" }} 
        />
      </div>
    </div>
  );
};

export default Diario;
