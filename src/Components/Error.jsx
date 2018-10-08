import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import error from "./Docs/error.md";

class Error extends Component {
  constructor(props) {
    super(props);

    this.state = { err: null };
  }

  componentWillMount() {
    fetch(error)
      .then(response => response.text())
      .then(text => {
        this.setState({ err: text });
      });
  }

  render() {
    return (
      <div className="mx-auto">
        <ReactMarkdown source={this.state.err} />
      </div>
    );
  }
}
export default Error;
