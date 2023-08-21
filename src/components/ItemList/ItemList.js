import Item from "../Item/Item"

const ItemList = ({ products }) => {
    return(
        <div className="flex gap-5 p-2">
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList;