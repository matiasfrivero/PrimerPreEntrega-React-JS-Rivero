import { useState } from "react";

function ItemCount({stock, onAdd}) {

    //VALORES
    let [contador, setContador] = useState(1)

    //ACCIONES
    const sumar = () => {
        if(contador < stock) {
        setContador(contador++)
    }
    }

    const restar = () => {
        if(contador > 1) {
        setContador(contador--)
        }
    }

    const resetear = () => {
        setContador(1);
    }

    //VISTA
    return (
        <main>
            <div className="box-border h-45 w-60 p-4 border-4 text-center mt-6 bg-zinc-300 mx-auto">
                <p className="text-center p-2">Cantidad: {contador}</p>
                <div className="flex justify-center gap-3">
                    <button onClick={sumar} className="font-medium bg-zinc-500 hover:bg-red-700 text-white p-2 px-4 rounded">+</button>
                    <button onClick={resetear} className="font-medium bg-zinc-500 hover:bg-red-700 text-white p-2 px-4 rounded">Reset</button>
                    <button onClick={restar} className="font-medium bg-zinc-500 hover:bg-red-700 text-white p-2 px-4 rounded">-</button>
                </div>
                <button className="mt-2 font-medium bg-zinc-500 hover:bg-red-700 text-white p-2 px-4 rounded" onClick={() => onAdd(contador)} disabled={!stock}>Agregar al Carrito</button>
            </div>
        </main>
    )
}

export default ItemCount;