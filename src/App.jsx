import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Diario from "./pages/Diario";
import Today from "./pages/DailyMood";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Mp3 from "./components/Mp3";
import { createContext, useEffect, useState } from "react";
import Metereopatia from "./pages/Metereopatia";
import FormLocation from "./components/FormLocation";
import ResultPage from "./components/ResultPage";
import Contatti from "./pages/Contatti";
import SocialMedia from "./pages/SocialMedia";
import FAQ from "./pages/FAQ";

export const DiarioContext = createContext();

function App() {
  const readFromStorage = () => {
    const diariolocale = localStorage.getItem("diario");
    if (diariolocale) {
      return JSON.parse(diariolocale);
    }
    return [];
  };

  const [diario, setDiario] = useState(readFromStorage());

  const aggiornaDiario = (day) => {
    const dayWithTimestamp = {
      ...day,
      timestamp: new Date().toLocaleString("it-IT", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    };
    setDiario([...diario, dayWithTimestamp]);
  };

  useEffect(() => {
    localStorage.setItem("diario", JSON.stringify(diario));
  }, [diario]);

  console.log(diario, "Stato Diario alle", new Date().toLocaleString());

  return (
    <>
      <DiarioContext.Provider value={diario}>
        <div className="min-h-screen flex flex-col">
        <Header />
        <Mp3 />
        <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diario" element={<Diario />} />
          <Route path="/today" element={<Today onDaySubmit={aggiornaDiario} />} />
          <Route path="/Metereopatia" element={<Metereopatia />} />
          <Route path="/FormLocation" element={<FormLocation />} />
          <Route path="/risultato" element={<ResultPage />} />
          <Route path="/Contatti" element={<Contatti />} />
          <Route path="/SocialMedia" element={<SocialMedia />} />
          <Route path="/FAQ" element={<FAQ />} />
        </Routes>
        </main>
        <Footer />
        </div>
      </DiarioContext.Provider>
    </>
  );
}

export default App;
