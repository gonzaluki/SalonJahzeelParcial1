import { useState } from "react";
import axios from "axios";
import logo from "../assets/logo.png";

function Navbar({ cartCount, openCart }) {
  const [email, setEmail] = useState("");
  const handleSubmit = async (e) => {

  e.preventDefault();

  try {

    const res = await axios.post(
      "http://localhost:5000/api/subscriptions",
      { email }
    );

    alert(res.data.message);

    setEmail("");

  } catch (error) {

    alert(
      error.response?.data?.message ||
      "Error al suscribirse"
    );

  }
};
  return (
    <nav className="navbar navbar-light bg-white shadow-sm px-4">
    
      <div className="d-flex align-items-center">
        <img src={logo} width="45" />
        <h5 className="ms-2 m-0 salon-title">SALÓN JAHZEEL</h5>
      </div>
      
      <div className="d-flex align-items-center gap-3">
        
        <form className="d-flex subscribe-form" onSubmit={handleSubmit}>
          <input
            type="email"
            required
            placeholder="Recibe promociones"
            className="form-control form-control-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}/>
          <button className="btn btn-dark btn-sm ms-2">
            Suscribirme
          </button>
        </form>
        
        <button
          className="btn btn-dark position-relative"
          onClick={openCart}>🛒
          {cartCount > 0 && (
            <span className="badge bg-danger cart-badge">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;