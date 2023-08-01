import cart from "./assets/bxs-cart-alt.svg"

function CartWidget() {
  return (
    <div className="flex">
        <a href="#"><img className="hover:bg-zinc-100 rounded" src={cart} alt="carrito"/></a>
        <p>0</p>
    </div>
  )
}

export default CartWidget;