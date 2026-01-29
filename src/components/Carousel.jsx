import React from 'react'

function Carousel() {
  return (
    <div id="carouselExample" className="carousel slide mb-5">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/assets/image/banner1.png" className="d-block w-100" alt="Banner 1" />
        </div>
        <div className="carousel-item">
          <img src="/assets/image/banner2.png" className="d-block w-100" alt="Banner 2" />
        </div>
        <div className="carousel-item">
          <img src="/assets/image/Banner3.png" className="d-block w-100" alt="Banner 3" />
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  )
}

export default Carousel
