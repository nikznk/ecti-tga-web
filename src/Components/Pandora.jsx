import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import Pandor from "./Docs/pandora.md";

class Pandora extends Component {
  constructor(props) {
    super(props);

    this.state = { pand: null };
  }

  componentWillMount() {
    fetch(Pandor)
      .then(response => response.text())
      .then(text => {
        this.setState({ pand: text });
      });
  }
  render() {
    return (
      <section className="section section03 container mx-auto ">
        <ReactMarkdown source={this.state.pand} escapeHtml={false} />
      </section>
    );
  }
}

export default Pandora;
