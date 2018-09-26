import React, { Component } from 'react';
import logo from './img/logo.png';
import './App.scss';

class App extends Component {
  render() {
    return (
      <header>
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
          <div className="container-welcome">
            <h1 class="fw-500">Welcome to Pandora!</h1>
            <h2 class="fw-400">Toi Ohomai Tauranga Computer Science Lab</h2>
            <p>
              Toi Ohomai Institute of Technology Bachelor of Computing and Mathematical Science This intranet is
              for students who are completing the either the University of Waikato Pathway, or the Toi Ohomai Degree in Web or
              Software pathway. On this little mini-site you can find information specific to the Pandora labs that are used as part of your course.
                </p>
            <br />
            <button class="bg-black hover:bg-blue-dark text-white  py-2 px-4 rounded">Pandora</button>
            <button class="bg-black hover:bg-blue-dark text-white  py-2 px-4 rounded">Corporate Network</button>
          </div>
        </div>
      </header>
    );
  }
}


export default App;
