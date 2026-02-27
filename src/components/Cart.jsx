import CartItem from "./CartItem"

function Cart({ cart, closeCart, removeFromCart }) {
  const total = cart.reduce((acc, item) => acc + item.price, 0)
  return (
    <div className="cart-panel">
      <div className="d-flex justify-content-between mb-3">
        <h4>Carrito</h4>
        <button className="btn btn-danger btn-sm" onClick={closeCart}>
          X
        </button>
      </div>
      {cart.length === 0 && <p>No hay productos</p>}
      {cart.map((item, index) => (
        <CartItem
          key={index}
          item={item}
          remove={() => removeFromCart(index)}/>
      ))}
      <hr />
      <h5>Total: ${total}</h5>
    </div>
  );
}

export default Cart