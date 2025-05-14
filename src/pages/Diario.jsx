import { useContext } from "react"
import { DiarioContext } from "../App"
import { useWeather } from "../hook/useWeather"

const Diario =() => {
    const {getWeatherDescription} = useWeather()
    const diario = useContext(DiarioContext)
    return(
        <>
        
        <p>Diario</p>
        <div>
        {diario.map((value) => <p key= {value.day}>{value.mood} - {getWeatherDescription(value.code)}</p>)}
        </div>
        </>
    )
}
export default Diario