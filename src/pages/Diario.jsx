import { useContext } from "react";
import { DiarioContext } from "../App";
import writingAnimation from '../animation/writing.json';
import Lottie from 'lottie-react';

const Diario = () => {
  const diario = useContext(DiarioContext);

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-md border border-gray-200 text-center">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Diario</h1>
      <div className="text-left">
        {diario.map((value, index) => (
          <p key={index} className="mb-2">
            <strong>{value.mood}</strong> — <span className="text-gray-600">{value.timestamp}</span>
             <p className="mt-1 text-gray-700 whitespace-pre-wrap">{value.note}</p>
          </p>
        ))}
      </div>

      <div className='fit-content'>
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
