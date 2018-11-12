import React, { Component } from "react";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";

class Header extends Component {
  toggle = () => {
    document.body.classList.toggle("change");
  };

  closeMenu = () => {
    if (document.body.classList.contains("change")) {
      document.body.classList.toggle("change");
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="container mx-auto">
          <div className="container-menu">
            <img src={logo} alt="Toi ohomai" />
            <nav className="flex list-reset justify-end">
              <li className="mx-3">
                <Link onClick={this.closeMenu} to="/">
                  Home
                </Link>
              </li>
              <li className="mx-3">
                <Link onClick={this.closeMenu} to="/CorporateNetwork">
                  Corporate Network
                </Link>
              </li>
              <li className="mx-3">
                <Link onClick={this.closeMenu} to="/Pandora">
                  Pandora Network
                </Link>
              </li>
              <li className="mx-3">
                <Link onClick={this.closeMenu} to="/Tools">
                  3rd Party Services
                </Link>
              </li>
              <li className="mx-3">
                <Link onClick={this.closeMenu} to="/NoticeBoard">
                  Noticeboard
                </Link>
              </li>
              <li className="mx-3">
                <Link onClick={this.closeMenu} to="/Contact">
                  Contact Us
                </Link>
              </li>
            </nav>
            <div className="toggle1" onClick={this.toggle}>
              <div className="bar1" />
              <div className="bar2" />
              <div className="bar3" />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
