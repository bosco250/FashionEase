import React from "react";
import { Footer, Navbar } from "../components";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-4 py-4">
        <h1 className="text-center fw-bold">Contact Us</h1>
        <p className="text-center text-muted">
          Have questions or need support? Get in touch with us!
        </p>
        <hr className="w-50 mx-auto mb-4" />

        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <form>
              <div className="mb-3">
                <label htmlFor="Name" className="form-label fw-semibold">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="Name"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="Email" className="form-label fw-semibold">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="Email"
                  placeholder="name@example.com"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="Message" className="form-label fw-semibold">
                  Your Message
                </label>
                <textarea
                  rows={5}
                  className="form-control"
                  id="Message"
                  placeholder="Enter your message here..."
                  required
                />
              </div>

              <div className="text-center">
                <button className="btn btn-dark px-4 py-2" type="submit">
                  Send Message
                </button>
              </div>
            </form>

            {/* Contact Info Section */}
            <div className="text-center mt-4">
              <p className="mb-1">
                📍 <strong>Address:</strong> 123 Fashion Street, New York, USA
              </p>
              <p className="mb-1">
                📞 <strong>Phone:</strong> +1 234 567 890
              </p>
              <p>
                📧 <strong>Email:</strong> support@fashionease.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
