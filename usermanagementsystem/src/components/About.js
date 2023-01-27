import React from "react";
import { NavLink } from "react-router-dom";

export default function About() {
  return (
    <main id="about">
      <div className="about mt-5 mb-5">
        <div className="container">
          {/* <!-- Section Head --> */}
          <h1 className="fw-bold text-center h1-responsive my-2 ">About Us</h1>
          <p className="text-center w-responsive mx-auto mb-1">
            What is User Management?
          </p>
          {/* <!-- Section Head --> */}

          <div className="row pt-5 ">
            <div className="col-md-6 col-sm-12 align-item-stretch mb-2 about-img">
              <img
                src="./images/user.jpg"
                alt="About"
                className="img-fluid mb-2 rounded-2 shadow h-75"
              />
            </div>

            <div className="col-md-6">
              <p className="lh-base">
                User management describes the ability for administrators to
                manage devices, systems, applications, storage systems,
                networks, SaaS services, and user access to other various IT
                resources. User management is a core part to any identity and
                access management (IAM) solution, in particular directory
                services tools.
              </p>
              <p>
                {" "}
                Controlling and managing user access to IT resources is a
                fundamental security essential for any organization. A user
                management system enables admins to control user access and
                on-board and off-board users to and from IT resources.
                Subsequently a directory service will then authenticate,
                authorize, and audit user access to IT resources based on what
                the IT admin had dictated.
              </p>

              <div className="container">
                <NavLink to="/" className="btn btn-primary px-2 pl-2 mt-1 mb-4">
                  Read More
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
