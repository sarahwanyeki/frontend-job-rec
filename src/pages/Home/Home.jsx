import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import logo from "../../assets/login_icon.png";

const Home = () => {
  return (
    <div className="home">
      <Navbar />

      {/* <!-- Hero Section --> */}
      <section className="hero text-center">
        <div className="hero-content">
          <h1>Find Your Dream Job</h1>
          <form className="mt-3">
            <input
              type="text"
              className="form-control w-50 mx-auto"
              placeholder="Job title, keywords..."
              aria-label="Job title"
            />
            <button type="submit" className="btn btn-primary mt-3">
              Search
            </button>
          </form>
        </div>
      </section>

      {/* <!-- Employer & Job Seeker Section --> */}
      <div className="container-fluid">
        <div className="row g-4 p-4">
          <div className="col-sm-6 mb-3 mb-sm-0">
            <div className="card-job">
              <div className="card-body">
                <h2 className="card-title">For Job Seekers</h2>
                <p className="card-text">
                  Browse our Ongozy jobs and start your career today
                </p>
                <a href="#" className="btn btn-dark px-4 py-2">
                  Browse Jobs
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6 mb-3 mb-sm-0">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">For Employers</h2>
                <p className="card-text">
                  List your job to find the perfect candidate for the role
                </p>
                <a href="#" className="btn btn-employer px-4 py-2">
                  Add Job
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Browse Jobs Section --> */}
      <section className="bg-custom-blue px-4 py-5">
        <div className="container-xl m-auto">
          <h2 className="browse-jobs font-weight-bold mb-4 text-center">
            Browse Jobs
          </h2>
          <div className="row g-4">
            {/* <!-- Job Listing 1 --> */}
            <div className="col-md-4">
              <div className="card-jobs p-4">
                <div className="mb-3">
                  <div className="text-muted mb-2">Full-Time</div>
                  <h3>Senior React Developer</h3>
                </div>
                <div className="jobs-text mb-5">
                  We are seeking a talented Front-End Developer to join our team
                  in Nakuru, Kenya. The ideal candidate will have strong skills
                  in HTML, CSS, and JavaScript...
                </div>
                <h4 className="jobs-range mb-3">$70K - $80K / Year</h4>
                <hr className="border-dark" />
                <div className="d-flex justify-content-between mb-3">
                  <div className="text-custom">
                    <i className="fas fa-map-marker-alt"></i> Nakuru, Kenya
                  </div>
                  <a href="job.html" className="btn btn-primary btn-sm">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- Job Listing 2 --> */}
            <div className="col-md-4">
              <div className="card-jobs p-4">
                <div className="mb-3">
                  <div className="text-muted mb-2">Remote</div>
                  <h3>Front-End Engineer (React)</h3>
                </div>
                <div className="jobs-text mb-4">
                  Join our team as a Front-End Developer in sunny Miami, FL. We
                  are looking for a motivated individual with a passion...
                </div>
                <h4 className="jobs-range mb-3">$70K - $80K / Year</h4>
                <hr className="border-dark" />
                <div className="d-flex justify-content-between mb-3">
                  <div className="text-custom">
                    <i className="fas fa-map-marker-alt"></i> Miami, FL
                  </div>
                  <a href="job.html" className="btn btn-primary btn-sm">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- Job Listing 3 --> */}
            <div className="col-md-4">
              <div className="card-jobs p-4">
                <div className="mb-3">
                  <div className="text-muted mb-2">Remote</div>
                  <h3>React.js Developer</h3>
                </div>
                <div className="jobs-text mb-4">
                  Are you passionate about front-end development? Join our team
                  in Nairobi, Kenya, and work on exciting projects that make a
                  difference...
                </div>
                <h4 className="jobs-range mb-3">$70K - $80K / Year</h4>
                <hr className="border-dark" />
                <div className="d-flex justify-content-between mb-3">
                  <div className="text-custom">
                    <i className="fas fa-map-marker-alt"></i> Nairobi, Kenya
                  </div>
                  <a href="job.html" className="btn btn-primary btn-sm">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto d-grid gap-2 col-6 mx-auto my-5 px-3">
        <a href="jobs.html" className="btn view-jobs btn-dark">
          View All Jobs
        </a>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
