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
        
        <p>Diario</p>
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
        </>
    )
}
export default Diario