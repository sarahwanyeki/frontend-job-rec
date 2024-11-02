import React from "react";

const Hero = () => {
  return (
    <section className="hero  text-center">
      <div className="hero-content text-center">
        <h1 className="hero-text-custom">Find Your Dream Job</h1>
        <form className="mt-3">
          <input
            type="text"
            className="form-control mx-auto col-md-8"
            placeholder="Job title, keywords..."
            aria-label="Job title"
          />
          <button type="submit" className="btn btn-primary mt-3">
            Search
          </button>
        </form>
      </div>
    </section>
  );
};

export default Hero;
