import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Diario from "./pages/Diario";
import Today from "./pages/Today";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { createContext, useEffect, useState } from "react";

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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diario" element={<Diario />} />
          <Route
            path="/today"
            element={<Today onDaySubmit={aggiornaDiario} />}
          />
        </Routes>
        <Footer />
      </DiarioContext.Provider>
    </>
  );
}

export default App;
