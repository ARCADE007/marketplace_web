import React from "react";
import { Link } from "react-router-dom";
import { COLORS } from "../Colors";

const Header = ({ active, setActive, user, handleLogout }) => {
  const userId = user?.uid;
  return (
    <div style={{ backgroundColor: COLORS.primary1 }}>
      <nav className="navbar navbar-expand-lg ">
        <div
          className="container-fluid bg-faded padding-media"
          style={{ backgroundColor: COLORS.primary1 }}
        >
          <div className="container padding-media">
            <nav className="navbar navbar-toggleable-md navbar-light">
              <button
                style={{ color: COLORS.primary4 }}
                className="navbar-toggler mt-3"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                data-bs-parent="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="true"
                aria-label="Toggle Navigation"
              >
                <span
                  style={{ color: COLORS.primary4 }}
                  className="fa fa-bars"
                ></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <li
                      className={`nav-item nav-link ${
                        active === "home" ? "active" : ""
                      }`}
                      onClick={() => setActive("home")}
                    >
                      Home
                    </li>
                  </Link>

                  <Link to="/create" style={{ textDecoration: "none" }}>
                    <li
                      className={`nav-item nav-link ${
                        active === "create" ? "active" : ""
                      }`}
                      onClick={() => setActive("create")}
                    >
                      Create
                    </li>
                  </Link>
                </ul>
                <div className="row g-3">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    {userId ? (
                      <>
                        <div className="profile-logo">
                          <p
                            style={{
                              marginTop: "12px",
                              marginLeft: "5px",
                              color: COLORS.primary3,
                            }}
                          >
                            Welcome !
                          </p>
                        </div>
                        <p style={{ marginTop: "12px", marginLeft: "5px" }}>
                          {user?.displayName}
                        </p>
                        <li
                          className="nav-item nav-link"
                          onClick={handleLogout}
                        >
                          Logout
                        </li>
                      </>
                    ) : (
                      <Link to="/auth" style={{ textDecoration: "none" }}>
                        <li
                          className={`nav-item nav-link ${
                            active === "login" ? "active" : ""
                          }`}
                          onClick={() => setActive("login")}
                        >
                          Login
                        </li>
                      </Link>
                    )}
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
