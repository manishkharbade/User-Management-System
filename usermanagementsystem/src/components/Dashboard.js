import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdAddCircle } from "react-icons/md";
import { FcViewDetails } from "react-icons/fc";
import "../Styles.css";

export default function Dashboard() {
  const [empdata, empdatachange] = useState(null);
  const navigate = useNavigate();

  const LoadDetail = (id) => {
    navigate("/employee/detail/" + id);
  };
  const LoadEdit = (id) => {
    navigate("/employee/edit/" + id);
  };
  const Removefunction = (id) => {
    if (window.confirm("Do you want to remove?")) {
      fetch("http://localhost:8000/employee/" + id, {
        method: "DELETE",
      })
        .then((res) => {
          alert("Removed Successfully!");
          window.location.reload();
        })
        .catch((errors) => {
          console.log(errors.message);
        });
    }
  };

  useEffect(() => {
    fetch("http://localhost:8000/employee")
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
    <div className="container my-5">
      <div className="card my-5">
        <div className="card-title text-center mt-4">
          <h2>Users Details</h2>
        </div>

        <div className="card-body">
          <div>
            <Link
              to="employee/add"
              className="btn btn-success border-success rounded shadow my-4"
            >
              Add Users <MdAddCircle className="ms-1" />
            </Link>
          </div>
          <table className="table table-bordered table-striped">
            <thead className="bg-dark text-dark">
              <tr className="table-success">
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Password</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {empdata &&
                empdata.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.password}</td>
                    <td className="text-center px-4">
                      <a
                        className="text-success font-sizing me-2"
                        onClick={() => {
                          LoadEdit(item.id);
                        }}
                      >
                        <FaEdit />
                      </a>
                      <a
                        className="text-danger font-sizing me-2"
                        onClick={() => {
                          Removefunction(item.id);
                        }}
                      >
                        <MdDelete />
                      </a>
                      <a
                        className="text-primary font-sizing me-2"
                        onClick={() => {
                          LoadDetail(item.id);
                        }}
                      >
                        <FcViewDetails />
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
