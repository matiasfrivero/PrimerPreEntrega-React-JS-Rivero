// Segundo componente
import logo from "./assets/Logo-png.png"
import CartWidget from "../Cart/CartWidget";
import ItemListContainer from "../ItemListContainer/ItemListContainer";

function Header() {
    return (
        <header>
            <div className="flex place-content-between font-medium bg-white items-center pr-10">
                <a href="#"><img src={logo} alt="logo" className="h-20"/></a>
                <ItemListContainer greeting={"Bienvenido a STEPS"}/>
                <CartWidget/>
            </div>            
        </header>
    )
}

export default Header;