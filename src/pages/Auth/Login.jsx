import React from "react";
import "./Login.css";
const Login = () => {
  return (
    <div className="login">
      {/* <!-- Sign In Section --> */}
      <section className="container my-5">
        <h2 className="text-center">Sign In</h2>
        <form className="mt-4">
          <div className="mb-3">
            <label for="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-3">
            <label for="password" className="form-label">
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
          <div className="mb-3">
            <a href="#">Forgot your password?</a>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Sign In
          </button>
        </form>
      </section>
    </div>
  );
};

export default Login;
