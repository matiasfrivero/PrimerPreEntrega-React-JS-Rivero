// Tercer componente
import ItemCount from "../ItemCount/ItemCount";
import ItemListContainer from "../ItemListContainer/ItemListContainer";

function Main() {
    return (
        <main className="bg-gradient-to-r from-zinc-300 to-zinc-100 p-5 text-center overflow-auto">
            <ItemListContainer greeting={"Bienvenido a STEPS"} />
            <ItemCount stock={10} onAdd={(contador) => console.log("Cantidad agregada", contador)} />
        </main>
    )
}

export default Main;