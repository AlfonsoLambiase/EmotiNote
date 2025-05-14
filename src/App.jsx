import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Diario from "./pages/Diario";
import Today from "./pages/DailyMood";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Mp3 from "./components/Mp3";
import { createContext, useEffect, useState } from "react";
import Metereopatia from "./pages/Metereopatia";

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
    setDiario([...diario, day]);
  };

  useEffect(() => {
    localStorage.setItem("diario", JSON.stringify(diario));
  }, [diario]);
  console.log(diario);

  return (
    <>
      <DiarioContext.Provider value={diario}>
        <Header />
        <Mp3 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diario" element={<Diario />} />
          <Route
            path="/today"
            element={<Today onDaySubmit={aggiornaDiario} />}
          />
          <Route path="/Metereopatia" element={<Metereopatia/>}/>
        </Routes>
        <Footer />
      </DiarioContext.Provider>
    </>
  );
}

export default App;
