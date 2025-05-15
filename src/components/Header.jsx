import { Link } from "react-router-dom"

const Header =() => {

    return(
   <header className="flex justify-center border-b p-4 mb-6 bg-orange-400">
    <nav>
        <ul className="flex justify-center gap-10">

            <li><Link to="/" className=" hover:text-white cursor-pointer transition duration-100">Home</Link></li>
            <li><Link to="/today" className=" hover:text-white cursor-pointer transition duration-100">Daily Mood</Link></li>
            <li><Link to="/diario" className=" hover:text-white cursor-pointer transition duration-100">Diario</Link></li>
            <li><Link to="/metereopatia" className=" hover:text-white cursor-pointer transition duration-100">Metereopatia</Link></li>
        </ul>

    </nav>

   </header>
    )
}
export default Header