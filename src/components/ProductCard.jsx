import React from "react";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="card product-card h-100 shadow-sm">
      
      <div className="img-container">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="card-body d-flex flex-column">

        <div>
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
        </div>

        
        <div className="mt-auto">
          <h6 className="price mb-3">${product.price}</h6>

          <button
            className="btn btn-dark w-100"
            onClick={() => addToCart(product)}
          >
            <i className="fas fa-cart-plus me-2"></i>
            Agregar al carrito
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProductCard;