import { useState, useEffect } from "react";
import products from "./data/products";

import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import Spinner from "./components/Spinner";

function App() {

  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 800);
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  if (loading) return <Spinner />;

  return (
    <>
      <Navbar
        cartCount={cart.length}
        openCart={() => setShowCart(true)}
      />

      <Carousel />

      <div className="container mt-5">

        <h2 className="mb-4 text-center fw-bold">Nuestros Productos</h2>

        <div className="row g-4">

          {products.map((product) => (
            <div
              key={product.id}
              className="col-12 col-sm-6 col-md-4 col-lg-3"
            >
              <ProductCard
                product={product}
                addToCart={addToCart}
              />
            </div>
          ))}

        </div>

      </div>

      {showCart && (
        <div
          className="cart-overlay"
          onClick={() => setShowCart(false)}
        />
      )}  
      
      {showCart && (
        <Cart
          cart={cart}
          closeCart={() => setShowCart(false)}
          removeFromCart={removeFromCart}
        />
      )}

      <footer className="footer">
  <div className="container">
    <div className="row">

      <div className="col-md-6">
        <h5>Salón Jahzeel</h5>
        <p>Productos profesionales para el cuidado del cabello.</p>

        <p>
          Calle 53 296 x 38 y 42 Villas La Hacienda <br />
          Mérida, Yucatán
        </p>

        <p>Tel: 999 129 9460</p>
      </div>

      <div className="col-md-6 text-md-end mt-4 mt-md-0">

        <h6>¡ENCUÉNTRANOS!</h6>

        <a
          href="https://maps.app.goo.gl/wvZ4S17kWv4DwZgv5"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-dark"
        >
          Ver en Google Maps
        </a>

      </div>

    </div>
  </div>
</footer>
    </>
  );
}

export default App;