import { Link } from "react-router-dom";

const Item = ({ id, name, img, price, stock }) => {

    return (
        <article className="box-border p-4 border-4 text-center mt-6 bg-zinc-300 mx-auto">
            <header>
                <h2 className="text-lg p-2">{name}</h2>
            </header>
            <picture>
                <img className="h-60 w-96 m-auto object-cover" src={img} alt={name} />
            </picture>
            <section className="p-2">
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
                <Link to={`/item/${id}`}>Ver Detalles</Link>
            </footer>
        </article>
    )
}

export default Item;