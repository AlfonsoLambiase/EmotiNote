import sunnyAnimation from "../animation/sunny.json";
import rainyAnimation from "../animation/rainy.json";
import cloudyAnimation from "../animation/cloudy.json";
import snowlyAnimation from "../animation/snowly.json";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";

const Metereopatia = () => {
  return (
<div className="flex items-start justify-center gap-6 ">
      {/* Colonna animazioni a sinistra */}
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

      
      <div className="max-w-xl p-6 bg-white rounded-2xl shadow-md border border-gray-200 text-center">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Metereopatia</h1>
        <p>
          Ti è mai capitato di sentirti giù quando il cielo è coperto o super
          energico in una giornata di sole? Potresti essere metereopatico! La
          metereopatia è una condizione in cui l’umore, l’energia e persino il
          corpo reagiscono ai cambiamenti del tempo: pioggia, vento, caldo o
          freddo possono influenzare come ti senti, senza che tu te ne accorga.
          <br />
          E tu, pensi di esserlo?☁️☀️
        </p>
        <br />

        <Link to="/FormLocation">
          <button className="bg-orange-400 text-white py-2 px-4 rounded-lg hover:bg-orange-500 transition">
            Scopriamolo Insieme
          </button>
        </Link>
      </div>

      
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

export default Metereopatia;
