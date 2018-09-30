import React, { Component } from "react";
import "./App.scss";
import Header from './Components/Header';
import Footer from './Components/Footer';
import Pandora from "./Components/Pandora";
import CorporateNetwork from "./Components/CorporateNetwork";

let welcomeText =
  "Toi Ohomai Institute of Technology Bachelor of Computing and Mathematical Science This intranet is for students who are completing the either the University of Waikato Pathway, or the Toi Ohomai Degree in Web or Software pathway. On this little mini-site you can find information specific to the Pandora labs that are used as part of your course.";


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      toggle: 'P'
    };
}

  toggle = type => {
    this.setState({
      toggle: type 
    });
  };

  render() {
    return (
     <React.Fragment>
       <header>
         <Header/>
         <div className="container container-welcome mx-auto">
              <h1 className="fw-500">Welcome to Pandora!</h1>
              <h2 className="fw-400">Toi Ohomai Tauranga Computer Science Lab</h2>
              <p>{welcomeText}</p>
              <br />
              <button
                onClick={() => this.toggle("P")}
                className="bg-black hover:bg-blue-dark text-white  py-2 px-4 rounded">
                Pandora
              </button>
              <button
                onClick={() => this.toggle("C")}
                className="bg-black hover:bg-blue-dark text-white  py-2 px-4 rounded">
           
                Corporate Network
              </button>
            </div>
         </header>
         
{        console.log(this.state.toggle)}
        
        {this.state.toggle === "P" && <Pandora />}
        {this.state.toggle === "C" && <CorporateNetwork />}

        <Footer />
        </React.Fragment>
    );
  }
}

export default App;
