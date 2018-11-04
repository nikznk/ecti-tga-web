import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import error from "./Docs/error.md";

var md = require("markdown-it")({
  html: true,
  linkify: true,
  typographer: true
});
var markdownItAttrs = require("markdown-it-attrs");
md.use(markdownItAttrs);

class Error extends Component {
  constructor(props) {
    super(props);

    this.state = { error: "" };
  }

  componentWillMount() {
    fetch(error)
      .then(response => response.text())
      .then(text => {
        this.setState({ error: text });
      });
  }

  render() {
    const { error } = this.state;
    return (
      <div className="mx-auto">
        <div dangerouslySetInnerHTML={{ __html: md.render(error) }} />
      </div>
    );
  }
}
export default Error;
