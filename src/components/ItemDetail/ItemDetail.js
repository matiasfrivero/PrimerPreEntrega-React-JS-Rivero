import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {

    return (
        <article className="box-border p-4 border-4 text-center mt-6 bg-zinc-300 mx-auto">
            <header>
                <h2 className="text-lg p-2">{name}</h2>
            </header>
            <picture>
                <img className="h-96 w-96 m-auto object-cover" src={img} alt={name} />
            </picture>
            <section className="p-2">
                <p>
                    Categoria: {category}
                </p>
                <p>
                    Descripcion: {description}
                </p>
                <p>
                    Precio: ${price}
                </p>
                <p>
                    Stock disponible: {stock}
                </p>
            </section>
            <select className="text-center" name="select">
                <option value="value" selected>Talles</option>
                <option value="39">39</option>
                <option value="40">40</option>
                <option value="41">41</option>
            </select>
            <footer>
            <ItemCount stock={10} onAdd={(contador) => console.log("Cantidad agregada", contador)} />
            </footer>
        </article>
    )
}

export default ItemDetail;