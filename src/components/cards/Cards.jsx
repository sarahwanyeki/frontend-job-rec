import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/style.css";

const Cards = () => {
  return (
    // <!-- Employer & Job Seeker Section -->
    <section className="py-4">
      <div className="container-lg mx-auto px-0">
        <div className="row">
          <div className="col-md-6">
            <div className="p-3 dev-custom-bg rounded shadow-sm">
              <h2 className="h4 fw-bold">For Developers</h2>
              <p className="mt-2 mb-4">
                Browse our React jobs and start your career today
              </p>
              <a href="/jobs.html" className="btn btn-dark px-4 py-2">
                Browse Jobs
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-3 emp-custom-bg rounded shadow-sm">
              <h2 className="h4 fw-bold">For Employers</h2>
              <p className="mt-2 mb-4">
                List your job to find the perfect developer for the role
              </p>
              <a href="/add-job.html" className="btn custom-btn px-4 py-2">
                Add Job
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
