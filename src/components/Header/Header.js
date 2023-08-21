// Segundo componente
import logo from "./assets/Logo-png.png"
import CartWidget from "../Cart/CartWidget";
import { NavLink, Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <nav className="flex place-content-between font-medium bg-white items-center pr-10">
                <Link to="/">
                    <img src={logo} alt="logo" className="h-20" />
                </Link>
                <div className="flex gap-10">
                    <NavLink to={"/category/Nike"} className="text-center font-medium bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded">Nike</NavLink>
                    <NavLink to={"/category/Adidas"} className="text-center font-medium bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded">Adidas</NavLink>
                    <NavLink to={"/category/Puma"} className="text-center font-medium bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded">Puma</NavLink>
                    <NavLink to={"/category/New Balance"} className="text-center font-medium bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded">New Balance</NavLink>
                </div>
                <CartWidget />
            </nav>
        </header>
    )
}

export default Header;