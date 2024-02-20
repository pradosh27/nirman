import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";
// import About from "../components/about";
import "../components/featurelist.css";

const FeatureList = () => {
    const { states, func } = useContext(GlobalContext);
    const { data } = states;
    const { fetchData, seeDetail } = func;

    useEffect(() => {
        fetchData();
    }, []);

    //mengacak data yang akan ditampilkan
    // const randomComparator = () => 0.5 - Math.random();
    // const randomJobs = data.sort(randomComparator).slice(0, 4);

    //tampilkan data secara acak
    const jobListElement = data.slice(0, 4).map((job) => {
        return (
            <div className="card bg-base-100 shadow-xl" key={job.id}>
                <div className="card-body">
                    <div className="flex justify-between">
                        <img
                            src={job.company_image_url}
                            className="h-10 w-14"
                            alt="logo-company"
                        />
                        <div className="badge badge-accent justify-end font-medium">
                            {job.job_tenure}
                        </div>
                    </div>
                    <h2 className="card-title text-lg text-primary font-bold">
                        {job.title}
                    </h2>

                    <p className="text-xs text-secondary">
                        {`${job.company_name} | ${job.company_city} (${job.job_type})`}
                    </p>
                    <p className="text-xs">
                        {job.job_description === null
                            ? "-"
                            : job.job_description.length > 60
                            ? job.job_description.substr(0, 60) + "..."
                            : job.job_description}
                    </p>
                    <p className=" text-xs mb-7">{`Rp.${job.salary_min} - Rp${job.salary_max}`}</p>
                    <div className="card-actions justify-end">
                        <button
                            className="btn btn-primary btn-sm"
                            value={job.id}
                            onClick={seeDetail}
                        >
                            Details
                        </button>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <>
      <div className="container">
        <nav className="navbar navbar-expand-lg custom-nav mt-2">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              LOGO
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Service
                  </a>
                </li>
                <li className="nav-items">
                  <a className="nav-link btn btn-sign-in">SIGN IN</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5">
            <div className="contact-section">
              <h1>CONTACT US</h1>
              <h3>LANDING PAGE</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa soluta, nostrum harum ab porro consequuntur, expedita libero amet illum modi error necessitatibus. Asperiores voluptate cum eveniet labore corporis totam minus.
              </p>
              <button className="btn know-more" type="submit">
                Know More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
    );
};

export default FeatureList;
