import React, { Component } from "react";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";

class Header extends Component {
  toggle = type => {
    this.setState({
      toggle: type
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="container mx-auto">
          <div className="container-menu">
            <img src={logo} alt="Toi ohomai" />
            <nav className="flex list-reset justify-end">
              <li className="mx-3">
                <Link to="/">Home</Link>
              </li>
              <li className="mx-3">
                <Link to="/CorporateNetwork">Corporate Network</Link>
              </li>
              <li className="mx-3">
                <Link to="/Pandora">Pandora Network</Link>
              </li>
              <li className="mx-3">
                <Link to="/Tools">3rd Party Services</Link>
              </li>
              <li className="mx-3">
                <Link to="/NoticeBoard">Noticeboard</Link>
              </li>
              <li className="mx-3">
                <Link to="/Contact">Contact Us</Link>
              </li>
            </nav>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
