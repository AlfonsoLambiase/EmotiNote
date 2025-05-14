import { Link } from "react-router-dom"

const Header =() => {

    return(
   <header className="flex justify-center border-b p-4 mb-6 bg-sky-200">
    <nav>
        <ul className="flex justify-center gap-10">

            <li><Link to="/">Home</Link></li>
            <li><Link to="/today">Today</Link></li>
            <li><Link to="/diario">Diario</Link></li>
        </ul>

    </nav>

   </header>
    )
}
export default Header