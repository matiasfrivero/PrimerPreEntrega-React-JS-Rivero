// Tercer componente
import ItemCount from "../ItemCount/ItemCount";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../ItemListContainer/ItemListContainer";

function Main() {
    return (
        <main className="bg-gradient-to-r from-zinc-300 to-zinc-100 p-5 text-center overflow-auto">
            <ItemListContainer greeting={"Bienvenido a STEPS"} />
            <ItemDetailContainer />
        </main>
    )
}

export default Main;