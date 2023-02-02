import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

export default function Update() {
  const { id } = useParams();
  // const [empdata, empdatachange] = useState({});

  useEffect(() => {
    fetch("http://localhost:8000/employee/" + id)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        idchange(resp.id);
        namechange(resp.name);
        emailchange(resp.email);
        phonechange(resp.phone);
        passwordchange(resp.password);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const [idchange] = useState("");
  const [name, namechange] = useState("");
  const [email, emailchange] = useState("");
  const [phone, phonechange] = useState("");
  const [password, passwordchange] = useState("");

  const navigate = useNavigate();
  const initialvalues = {
    id: "",
    name: "",
    email: "",
    phone: "",
    password: "",
  };
  const [formValues, setFormValues] = useState(initialvalues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);

    if (Object.keys(formErrors).length === 0 && isSubmit) {
      fetch("http://localhost:8000/employee/" + id, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(formValues),
      })
        .then((res) => {
          alert("Saved Successfully!");
          navigate("/dashboard");
        })
        .catch((errors) => {
          console.log(errors.message);
        });
    }
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!values.name) {
      errors.name = "Name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    if (!values.phone) {
      errors.phone = "Phone No. is required!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 12) {
      errors.password = "Password cannot exceed more than 10 characters!";
    }
    return errors;
  };

  return (
    <div className="my-5 mb-5 ">
      <div class="col-md-6 offset-md-3 my-4 justify-content-center container h-auto w-80 border rounded bg-light">
        <Link to="/dashboard" className="text-end btn btn-primary mt-2">
          <BiArrowBack className="me-1" />
          Back
        </Link>
        <h4 class="d-flex justify-content-center mt-4">Edit User</h4>

        <form class="container" onSubmit={handleSubmit}>
          <div class="form-group">
            <label>User ID</label>
            <input
              type="number"
              class="form-control"
              name="id"
              placeholder="User ID"
              value={formValues.id}
              onChange={handleChange}
              disabled="disabled"
            />
          </div>
          <pre></pre>

          <div class="form-group">
            <label>Name</label>
            <input
              type="text"
              class="form-control"
              name="name"
              placeholder="Name"
              value={formValues.name}
              onChange={handleChange}
              // onChange={(e) => namechange(e.target.value)}
            />
          </div>
          <p className="errors">{formErrors.name}</p>
          <pre></pre>

          <div class="form-group">
            <label>Email Id</label>
            <input
              type="email"
              class="form-control"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p className="errors">{formErrors.email}</p>
          <pre></pre>

          <div class="form-group">
            <label>Phone Number</label>
            <input
              type="number"
              class="form-control"
              name="phone"
              placeholder="Phone Number"
              value={formValues.phone}
              onChange={handleChange}
            />
          </div>
          <p className="errors">{formErrors.phone}</p>
          <pre></pre>

          <div class="form-group">
            <label>Password</label>
            <input
              type="password"
              class="form-control"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p className="errors">{formErrors.password}</p>
          <pre></pre>

          <button type="submit" className="btn btn-primary w-100 mb-5 ">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}
