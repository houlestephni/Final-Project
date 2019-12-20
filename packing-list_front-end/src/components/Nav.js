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
            <a role="button" class="navbar-burger burger" data-target="navMenu">
              <span></span>
              <span></span>
              <span></span>
            </a>
          </div>
          <div id="navMenu" class="navbar-menu">
            <div class="navbar-end">
              <a href="#" class="navbar-item is-active">
                Home
              </a>
              <a href="#" class="navbar-item">
                Lists
              </a>
              <a href="#" class="navbar-item">
                Add List
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
