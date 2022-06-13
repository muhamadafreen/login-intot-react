import React from "react";

function Slider() {
  return (
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators indicator ">
        <div class="indicator ">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          >
            <div class="numberindicator">
              <h5>01</h5>
            </div>
          </button>

          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          >
            <div class="numberindicator">
              <h5>02</h5>
            </div>
          </button>
        </div>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="d-block w-100">
            <div class="row">
              <div className="container headercontent col-md-3 offset-md-2">
                <h1 className="text-white headtext">
                  INNOVATIVE
                  <span class="text-dark">SOLUTION</span>
                </h1>
                <p class="text-white">
                  We find the best solutions fot you, we redesign your home and
                  work places. Discover why over 5,100 home owners trust
                  initiative
                </p>
                <a class="  readbtn">Read More</a>
              </div>

              <div class="container col-md-7 sliderimg">
                <img
                  class="headerimage"
                  src="images/slider-img.png"
                  alt="slider-img"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="d-block w-100">
            <div class="row">
              <div class="container headercontent col-md-3 offset-md-2">
                <h1 class="text-white headtext">
                  INNOVATIVE
                  <span class="text-dark">SOLUTION</span>
                </h1>
                <p class="text-white">
                  We find the best solutions fot you, we redesign your home and
                  work places. Discover why over 5,100 home owners trust
                  initiative
                </p>

                <a class="  readbtn">Read More</a>
              </div>

              <div class="container col-md-7 sliderimg">
                <img
                  class="headerimage"
                  src="images/slider-img.png"
                  alt="slider-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        class="carouselprev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <img src="images/left-black-arrow.png" alt="prev" />
      </button>
      <button
        class="carouselNext"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <img src="images/right-black-arrow.png" alt="next" />
      </button>
    </div>
  );
}

export default Slider;
