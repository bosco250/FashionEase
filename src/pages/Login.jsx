import React from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../components";

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="container my-4 py-4">
        <h1 className="text-center fw-bold">Login</h1>
        <p className="text-center text-muted">Access your account</p>
        <hr className="w-50 mx-auto mb-4" />

        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <form>
              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label fw-semibold">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <div className="text-center mb-3">
                <p>
                  <Link to="/forgot-password" className="text-decoration-none text-info">
                    Forgot Password?
                  </Link>
                </p>
              </div>

              <div className="text-center">
                <button className="btn btn-dark px-4 py-2" type="submit">
                  Login
                </button>
              </div>

              <div className="text-center mt-3">
                <p>
                  New here?{" "}
                  <Link to="/register" className="text-decoration-underline text-info">
                    Register
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
