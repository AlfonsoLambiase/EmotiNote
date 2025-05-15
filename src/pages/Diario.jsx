import { useContext } from "react"
import { DiarioContext } from "../App"
import { useWeather } from "../hook/useWeather"
import writingAnimation from '../animation/writing.json';
import Lottie from 'lottie-react';

const Diario =() => {
    const {getWeatherDescription} = useWeather()
    const diario = useContext(DiarioContext)
    return(
        <>
        <div className="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-md border border-gray-200 text-center" >
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Diario</h1>
        <div>
        {diario.map((value) => <p key= {value.day}>{value.mood} - {getWeatherDescription(value.code)}</p>)}
        </div>

            <div className='fit-content'>
        <Lottie 
        animationData={writingAnimation} 
        loop={true} 
        autoplay={true} 
        style={{ width: 200, height: 200 }} 
      />
    </div>
    </div>
        </>
    )
}
export default Diario