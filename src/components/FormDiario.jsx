import { useState } from "react";
import motivationalMessages from "../data/motivationalMessages.json";

export const FormDiario = ({ onSubmit }) => {
  const [motivationalMessage, setMotivationalMessage] = useState("");

  const getRandomMessage = (mood) => {
    const messages = motivationalMessages[mood];
    if (!messages || messages.length === 0) return "";
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
  };

  const submit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const data = {
      note: formData.get("note"),
      mood: formData.get("mood"),
    };
    onSubmit(data);

    // Mostra frase motivazionale
    const message = getRandomMessage(data.mood);
    setMotivationalMessage(message);
  };

  return (
    <div className="w-full">
      <form onSubmit={submit} className="flex flex-col gap-6">
        <h2 className="text-xl font-semibold text-gray-800 text-center">
          Come ti senti oggi?
        </h2>

        <textarea
          name="note"
          id="note"
          placeholder="Spiegaci perché..."
          className="w-full h-28 p-3 border border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-orange-300"
        ></textarea>

        <div className="grid grid-cols-2 gap-4">
          <label className="flex items-center gap-2 p-3 border rounded-xl cursor-pointer hover:bg-gray-100">
            <input
              type="radio"
              name="mood"
              value="entusiasta"
              className="accent-orange-500"
            />
            Entusiasta ✨
          </label>

          <label className="flex items-center gap-2 p-3 border rounded-xl cursor-pointer hover:bg-gray-100">
            <input
              type="radio"
              name="mood"
              value="motivato"
              className="accent-orange-500"
            />
            Motivato 💪
          </label>

          <label className="flex items-center gap-2 p-3 border rounded-xl cursor-pointer hover:bg-gray-100">
            <input
              type="radio"
              name="mood"
              value="nulla-particolare"
              className="accent-orange-500"
            />
            Ok, ma nulla di speciale 👍
          </label>

          <label className="flex items-center gap-2 p-3 border rounded-xl cursor-pointer hover:bg-gray-100">
            <input
              type="radio"
              name="mood"
              value="giornata"
              className="accent-orange-500"
            />
            Vivo la giornata ☀
          </label>

          <label className="flex items-center gap-2 p-3 border rounded-xl cursor-pointer hover:bg-gray-100">
            <input
              type="radio"
              name="mood"
              value="ansioso"
              className="accent-orange-500"
            />
            Ansioso 😟
          </label>

          <label className="flex items-center gap-2 p-3 border rounded-xl cursor-pointer hover:bg-gray-100">
            <input
              type="radio"
              name="mood"
              value="triste"
              className="accent-orange-500"
            />
            Triste 😢
          </label>
        </div>

        <button
          type="submit"
          className="bg-orange-400 text-white py-2 rounded-lg hover:bg-orange-500 transition-colors font-semibold"
        >
          Invia
        </button>
      </form>

      {motivationalMessage && (
        <div className="mt-6 p-4 bg-yellow-100 text-yellow-800 rounded-lg shadow text-center">
          {motivationalMessage}
        </div>
      )}
    </div>
  );
};