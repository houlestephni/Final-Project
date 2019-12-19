import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer">
          <div className="content has-text-centered">
            <p>
              <strong>Alpaca My Bag</strong> created by{" "}
              <a href="#">Stephni Houle</a> &copy; 2019
            </p>
            <p>
              Icons made by{" "}
              <a
                href="https://www.flaticon.com/authors/freepik"
                title="Freepik"
              >
                Freepik
              </a>{" "}
              from{" "}
              <a href="https://www.flaticon.com/" title="Flaticon">
                www.flaticon.com
              </a>
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
