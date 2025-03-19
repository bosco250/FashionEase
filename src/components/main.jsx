import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/main.png.jpg"
            alt="FashionEase Banner"
            height={500}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container text-center">
              <h1 className="card-title fs-1 fw-bold">Discover the Latest Fashion Trends</h1>
              <p className="card-text fs-5 d-none d-sm-block">
                Explore our exclusive collection of stylish, high-quality apparel. 
                Shop effortlessly and stay ahead of fashion trends with <b>FashionEase</b>.
              </p>
              <button className="btn btn-light px-4 py-2 mt-3 fw-bold">
                
                <NavLink className="nav-link" to="/product">Shop Now</NavLink>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
