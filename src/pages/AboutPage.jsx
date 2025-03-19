import React from "react";
import { Footer, Navbar } from "../components";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        {/* About Us Section */}
        <h1 className="text-center fw-bold">About FashionEase</h1>
        <hr className="w-50 mx-auto mb-4" />
        <p className="lead text-center">
          FashionEase is your go-to online destination for trendy fashion, 
          stylish jewelry, and cutting-edge electronics. Our mission is to bring 
          high-quality, affordable products to your doorstep, ensuring that 
          shopping is both easy and enjoyable.  
        </p>

        {/* Why Choose Us */}
        <h2 className="text-center fw-bold mt-5">Why Choose Us?</h2>
        <div className="row text-center">
          {[
            { icon: "🚚", title: "Fast & Free Shipping", desc: "Enjoy swift, free delivery on all orders." },
            { icon: "🔒", title: "Secure Payments", desc: "Safe transactions with trusted payment options." },
            { icon: "✨", title: "Premium Quality", desc: "Handpicked products ensuring top-notch quality." },
            { icon: "📞", title: "24/7 Support", desc: "Our team is always here to assist you." },
          ].map((item, index) => (
            <div key={index} className="col-md-3 col-sm-6">
              <div className="card border-0 shadow-sm p-3">
                <div className="fs-1">{item.icon}</div>
                <h5 className="mt-2 fw-semibold">{item.title}</h5>
                <p className="text-muted">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Product Categories */}
        <h2 className="text-center fw-bold mt-5">Our Collections</h2>
        <p className="text-center mb-4">
          Discover a wide range of products tailored for your style and needs.
        </p>

        <div className="row g-4">
          {[
            {
              title: "Men's Clothing",
              img: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600",
              desc: "Latest trends in men’s fashion, from casual to formal wear.",
            },
            {
              title: "Women's Clothing",
              img: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600",
              desc: "Elegant, comfortable, and stylish clothing for women.",
            },
            {
              title: "Jewelry",
              img: "https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600",
              desc: "Beautiful, timeless jewelry pieces to complement any look.",
            },
            {
              title: "Electronics",
              img: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600",
              desc: "Innovative and high-quality gadgets and devices.",
            },
          ].map((product, index) => (
            <div key={index} className="col-md-3 col-sm-6">
              <div className="card h-100 border-0 shadow-sm">
                <img className="card-img-top img-fluid rounded" src={product.img} alt={product.title} height={160} />
                <div className="card-body text-center">
                  <h5 className="card-title fw-semibold">{product.title}</h5>
                  <p className="text-muted">{product.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Customer Testimonials */}
        <h2 className="text-center fw-bold mt-5">What Our Customers Say</h2>
        <p className="text-center mb-4">Real reviews from happy customers.</p>
        <div className="row text-center">
          {[
            { name: "Emma J.", review: "FashionEase is my favorite online store! Great quality and fast delivery." },
            { name: "James K.", review: "The best shopping experience! I love the customer support and variety." },
            { name: "Sophia L.", review: "Trendy fashion at affordable prices. Highly recommend!" },
          ].map((testimonial, index) => (
            <div key={index} className="col-md-4">
              <div className="card border-0 shadow-sm p-3">
                <p className="fst-italic">"{testimonial.review}"</p>
                <h6 className="fw-bold mt-2">{testimonial.name}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutPage;
