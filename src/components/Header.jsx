import { Link } from "react-router-dom"

const Header =() => {

    return(
   <header className="flex justify-center border-b p-4 mb-6 bg-orange-400">
    <nav>
        <ul className="flex justify-center gap-10">

            <li><Link to="/">Home</Link></li>
            <li><Link to="/today">Daily Mood</Link></li>
            <li><Link to="/diario">Diario</Link></li>
            <li><Link to="/metereopatia">Metereopatia</Link></li>
        </ul>

    </nav>

   </header>
    )
}
export default Header