import React, { Component } from "react";
import logo from '../img/logo.png';


 
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
                  <a href="">Home</a>
                </li>
                <li className="mx-3">
                  <a href="">Corporate Network</a>
                </li>
                <li className="mx-3">
                  <a href="">Pandora Network</a>
                </li>
                <li className="mx-3">
                  <a href="">3rd Party Services</a>
                </li>
                <li className="mx-3">
                  <a href="">Noticeboard</a>
                </li>
                <li className="mx-3">
                  <a href="">Contact Us</a>
                </li>
              </nav>
            </div>

          </div>

       </React.Fragment>
    );
  }
}

export default Header;
