import { useState, useEffect } from "react";
import motivationalMessages from "../data/motivationalMessages.json";
import { FormDiario } from "../components/FormDiario";

const Today = ({ onDaySubmit }) => {
  const [submitted, setSubmitted] = useState(false);
  const [motivationalPhrase, setMotivationalPhrase] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const onSubmit = (data) => {
    if (!data.mood) {
      setShowAlert(true);
      return;
    }

    const day = {
      ...data,
      day: new Date().toLocaleDateString("it-IT", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    };
    onDaySubmit(day);

    const mood = data.mood;
    const phrases = motivationalMessages[mood];

    if (phrases && phrases.length > 0) {
      const randomIndex = Math.floor(Math.random() * phrases.length);
      setMotivationalPhrase(phrases[randomIndex]);
    } else {
      setMotivationalPhrase(
        "Hai fatto un buon lavoro nel condividere come ti senti."
      );
    }

    setSubmitted(true);
  };

  // Nascondi alert dopo 3 secondi
  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => setShowAlert(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showAlert]);

  if (submitted) {
    return (
      <div className="flex justify-center items-center mb-5 px-4">
        <div className="bg-white p-6 rounded-xl shadow-md max-w-md text-center">
          <p className="text-orange-500 text-xl font-semibold mb-4">
            Grazie per aver condiviso 🌟
          </p>
          <p className="text-gray-800 text-lg italic mb-6">"{motivationalPhrase}"</p>
          <button
            onClick={() => {
              setSubmitted(false);
              setMotivationalPhrase("");
            }}
            className="bg-orange-400 text-white py-2 px-4 rounded-lg hover:bg-orange-500 transition"
          >
            Condividi un altro umore
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-md border border-gray-200 text-center relative">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Daily Mood
        </h1>

        {/* Popup alert */}
        {showAlert && (
          <div className="absolute top-20 left-1/2 -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded shadow z-50 h-10">
            Per favore seleziona un umore.
          </div>
        )}

        <FormDiario onSubmit={onSubmit} />
      </div>
    </>
  );
};

export default Today;
