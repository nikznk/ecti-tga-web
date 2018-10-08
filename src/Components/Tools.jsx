import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import service from "./Docs/google.md";
import microsoft from "./Docs/microsoft.md";

class Tools extends Component {
  constructor(props) {
    super(props);

    this.state = { serv: null };
    this.state = { micro: null };
  }

  componentWillMount() {
    fetch(service)
      .then(response => response.text())
      .then(text => {
        this.setState({ serv: text });
      });
    fetch(microsoft)
      .then(response => response.text())
      .then(text => {
        this.setState({ micro: text });
      });
  }
  render() {
    return (
      <section className="container  mx-auto">
        <ReactMarkdown
          source={this.state.serv}
          escapeHtml={false}
          linkTarget="_blank"
        />

        <ReactMarkdown
          source={this.state.micro}
          escapeHtml={false}
          linkTarget="_blank"
        />
      </section>
    );
  }
}

export default Tools;
