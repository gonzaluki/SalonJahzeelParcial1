import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";

function Carousel() {
  return (
    <div id="carouselExample" className="carousel slide container mt-3">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={banner1} className="d-block w-100 banner" alt="Banner 1" />
        </div>
        <div className="carousel-item">
          <img src={banner2} className="d-block w-100 banner" alt="Banner 2" />
        </div>
        <div className="carousel-item">
          <img src={banner3} className="d-block w-100 banner" alt="Banner 3" />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
}

export default Carousel;