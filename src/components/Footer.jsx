import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container text-center">
        {/* Brand & Description */}
        <h4 className="fw-bold">FashionEase</h4>
        <p className="small">
          Discover the latest fashion trends and shop effortlessly with us.
        </p>

        {/* Quick Links */}
        <div className="d-flex justify-content-center gap-4 my-3">
          <a href="/shop" className="text-white text-decoration-none">Shop</a>
          <a href="/about" className="text-white text-decoration-none">About</a>
          <a href="/contact" className="text-white text-decoration-none">Contact</a>
        </div>

        {/* Social Links */}
        <div className="d-flex justify-content-center gap-3">
          <a href="https://facebook.com" className="text-white fs-5">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="https://twitter.com" className="text-white fs-5">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="https://instagram.com" className="text-white fs-5">
            <i className="fa fa-instagram"></i>
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-3">
          <p className="small mb-0">&copy; {new Date().getFullYear()} FashionEase | Built by Boscodev</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
