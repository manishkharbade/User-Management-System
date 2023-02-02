import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

export default function Details() {
  const { id } = useParams();
  const [empdata, empdatachange] = useState({});

  useEffect(() => {
    fetch("http://localhost:8000/employee/" + id)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        empdatachange(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="card d-flex justify-content-start flex-column m-5 shadow rounded w-50">
      {
        <div className="p-4">
          <h2 className="text-center">Users Details</h2>
          <h5 className="mt-5">
            User Name: {empdata.name} ({empdata.id})
          </h5>
          <pre></pre>
          <h5>Email Id: {empdata.email}</h5>
          <pre></pre>
          <h5>Phone Number: {empdata.phone}</h5>
          <pre></pre>
          <h5>Password: {empdata.password}</h5>
          <pre></pre>
          <div>
            <Link to="/dashboard" className="btn btn-primary my-4">
              <BiArrowBack className="me-1" />
              Back
            </Link>
          </div>
        </div>
      }
    </div>
  );
}
