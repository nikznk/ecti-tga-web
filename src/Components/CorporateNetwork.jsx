import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import corporate from "./Docs/corporate.md";

class CorporateNetwork extends Component {
  constructor(props) {
    super(props);

    this.state = { corp: null };
  }

  componentWillMount() {
    fetch(corporate)
      .then(response => response.text())
      .then(text => {
        this.setState({ corp: text });
      });
  }

  render() {
    return (
      <section className="section03 container mx-auto">
        <ReactMarkdown source={this.state.corp} />
      </section>
    );
  }
}

export default CorporateNetwork;
