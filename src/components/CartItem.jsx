function CartItem({ item, remove }) {
  return (
    <div className="cart-item">
      <div>
        <strong>{item.name}</strong>
        <p className="m-0 small">${item.price}</p>
      </div>
      <button
        className="btn btn-sm btn-outline-danger"
        onClick={remove}
      >X
      </button>
    </div>
  );
}

export default CartItem;