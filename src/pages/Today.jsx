import { useState } from "react";
import { FormDiario } from "../components/FormDiario";
import motivationalMessages from "../data/motivationalMessages.json";

const Today = ({ onDaySubmit }) => {
  const [submitted, setSubmitted] = useState(false);
  const [motivationalPhrase, setMotivationalPhrase] = useState("");

  const onSubmit = (data) => {
    const day = {
      ...data,
      day: new Date(),
    };
    onDaySubmit(day);

    // Ricava il mood
    const mood = data.mood;

    // Prendi l'array di frasi per quel mood
    const phrases = motivationalMessages[mood];

    if (phrases && phrases.length > 0) {
      // Prendi una frase random
      const randomIndex = Math.floor(Math.random() * phrases.length);
      setMotivationalPhrase(phrases[randomIndex]);
    } else {
      setMotivationalPhrase("Hai fatto un buon lavoro nel condividere come ti senti.");
    }

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex justify-center items-center h-screen px-4">
        <div className="bg-white p-6 rounded-xl shadow-md max-w-md text-center">
          <p className="text-orange-500 text-xl font-semibold mb-4">Grazie per aver condiviso 🌟</p>
          <p className="text-gray-800 text-lg italic">"{motivationalPhrase}"</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto p-6 mt-10 bg-white rounded-2xl shadow-md">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Daily Mood
      </h1>
      <FormDiario onSubmit={onSubmit} />
    </div>
  );
};

export default Today;
