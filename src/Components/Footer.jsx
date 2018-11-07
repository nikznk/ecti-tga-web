import React, { Component } from "react";
import logo from "../img/logo.png";
import facebook from "../img/facebook.png";
import instagram from "../img/instagram.png";

class Footer extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <footer>
          <section>
            <div className="container mx-auto footer">
              <img className="py-2" src={logo} alt="Toi ohomai" />
              <div className="col col02">
                200 Cameron Road, Tauranga
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/toiohomai/"
                >
                  <img
                    className="float-right"
                    src={facebook}
                    alt="facebookicon"
                  />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/toiohomai/"
                >
                  <img
                    className="float-right"
                    src={instagram}
                    alt="facebookicon"
                  />
                </a>
              </div>
            </div>
          </section>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
