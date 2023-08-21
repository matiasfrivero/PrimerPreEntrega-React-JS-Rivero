import { useState, useEffect } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import { useParams } from "react-router-dom"
import ItemList from "../ItemList/ItemList"

function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([])

  const { categoryId } = useParams()

  useEffect(() => {
    const asyncFunc = categoryId ? getProductsByCategory : getProducts

    asyncFunc(categoryId)
      .then(response => {
        setProducts(response)
      })
      .catch(error => {
        console.error(error)
      })
  }, [categoryId])

  return (
    <div>
      <h1 className="font-medium p-2">
        {greeting}
      </h1>
      <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer;