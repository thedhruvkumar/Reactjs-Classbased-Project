import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              NewsExpress
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className={({ isActive }) => isActive? "nav-link active": 'nav-link'} to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={({ isActive }) => isActive? "nav-link active": 'nav-link'} to="science">Science</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={({ isActive }) => isActive? "nav-link active": 'nav-link'} to="business">Business</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={({ isActive }) => isActive? "nav-link active": 'nav-link'} to="technology">Technology</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={({ isActive }) => isActive? "nav-link active": 'nav-link'} to="entertainment">Entertainment</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={({ isActive }) => isActive? "nav-link active": 'nav-link'} to="health">Health</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={({ isActive }) => isActive? "nav-link active": 'nav-link'} to="sports">Sports</NavLink>
                </li>
              </ul>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      
    );
  }
}
