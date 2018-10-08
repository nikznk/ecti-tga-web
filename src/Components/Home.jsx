import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import Homee from "./Docs/home.md";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = { hom: null };
  }

  componentWillMount() {
    fetch(Homee)
      .then(response => response.text())
      .then(text => {
        this.setState({ hom: text });
      });
  }
  render() {
    return (
      <section className="section section03 container  mx-auto ">
        <ReactMarkdown source={this.state.hom} escapeHtml={false} />
      </section>
    );
  }
}

export default Home;
