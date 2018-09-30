import React, { Component } from 'react';
import logo from '../img/logo.png';

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
        <footer>
        <section>
          <div className="container mx-auto footer">
            <img src={logo} alt="Toi ohomai" />
          </div>
          <div className="col col02">200 Cameron Road, Tauranga</div>
          <div className="col col03"></div>
        </section>
        </footer>
        </React.Fragment>
         );
    }
}
 
export default Footer;