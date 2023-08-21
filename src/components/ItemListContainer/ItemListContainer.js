import { useState, useEffect } from "react"
import { getProducts } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"

function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts()
      .then(response => {
        setProducts(response)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])

  return (
    <div>
      <a href="#">
        <h1 className="font-medium bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded mx-96">
          {greeting}
        </h1>
      </a>
      <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer;