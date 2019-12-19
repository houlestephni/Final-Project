import React, { Component } from "react";
// import "../styles/Nav.css";

class Nav extends Component {
  render() {
    return (
      <div>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <img
              class="navbar-item"
              src="../../images/alpaca.png"
              width="60"
              height="16"
            />
            <a
              role="button"
              class="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
