import React from "react";
import { NavLink } from "react-router-dom";
import { User, useAuth0 } from "@auth0/auth0-react";

export default function Header() {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container-fluid">
          <NavLink
            className="navbar-brand me-4 mx-4 d-flex justify-content-between align-items-center"
            to="/"
          >
            User Management System
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex flex-end me-3 px-4 align-items-center">
              <li className="nav-item">
                <NavLink className="nav-link fw-bold" to="/">
                  Dashboard
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link fw-bold" to="/about">
                  About
                </NavLink>
              </li>

              {isAuthenticated && (
                <li className="nav-item fw-bold d-flex flex-end mt-3 px-2 align-items-center">
                  <p>{user.name}</p>
                </li>
              )}

              {isAuthenticated ? (
                <li className="nav-item p-2 me-2 d-flex align-items-center">
                  <button
                    className="btn btn-danger btn-sm "
                    onClick={() =>
                      logout({
                        logoutParams: { returnTo: window.location.origin },
                      })
                    }
                  >
                    Log Out
                  </button>
                </li>
              ) : (
                <li className="nav-item p-2 me-2 d-flex align-items-center">
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => loginWithRedirect()}
                  >
                    Log In
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
