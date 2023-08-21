const Item = ({id, name, img, price, stock}) => {

    return(
        <article>
            <header>
                <h2 className="text-lg p-2">{name}</h2>
            </header>
            <picture>
                <img className="h-96" src={img} alt={name} />
            </picture>
            <section className="p-2">
                <p>
                    Precio: ${price}
                </p>
                <p>
                    Stock disponible: {stock}
                </p>
            </section>
            <footer>
                <button>Ver Detalles</button>
            </footer>
        </article>
    )
}

export default Item;