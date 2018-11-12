import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.scss";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import CorporateNetwork from "./Components/CorporateNetwork";
import Pandora from "./Components/Pandora";
import Tools from "./Components/Tools";
import NoticeBoard from "./Components/NoticeBoard";
import Contact from "./Components/Contact";
let welcomeText =
  "Toi Ohomai Institute of Technology Bachelor of Computing and Mathematical Science This intranet is for students who are completing the either the University of Waikato Pathway, or the Toi Ohomai Degree in Web or Software pathway. On this little mini-site you can find information specific to the Pandora labs that are used as part of your course.";

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <header>
            <Header />
            <div className="container container-welcome mx-auto">
              <h1 className="fw-500">Welcome to Pandora!</h1>
              <h2 className="fw-400">
                Toi Ohomai Tauranga Computer Science Lab
              </h2>
              <p>{welcomeText}</p>
              <br />
              <button className="bg-black hover:bg-blue-dark text-white py-2 px-4 rounded">
                <Link className="no-underline" to="/Pandora">
                  Pandora
                </Link>
              </button>
              <button className="bg-black hover:bg-blue-dark text-white mx-1 py-2 px-4 rounded">
                <Link className="no-underline" to="/CorporateNetwork">
                  Corporate Network
                </Link>
              </button>
            </div>
          </header>

          <main className="main-content">
            <Route exact path="/" component={Home} />
            <Route path="/CorporateNetwork" component={CorporateNetwork} />
            <Route path="/Pandora" component={Pandora} />
            <Route path="/Tools" component={Tools} />
            <Route path="/NoticeBoard" component={NoticeBoard} />
            <Route path="/Contact" component={Contact} />
          </main>

          <Footer />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
