import React, { Component } from "react";
import Pandor from "./Docs/pandora.md";

var md = require("markdown-it")({
  html: true,
  linkify: true,
  typographer: true
});
var markdownItAttrs = require("markdown-it-attrs");
md.use(markdownItAttrs);

class Pandora extends Component {
  constructor(props) {
    super(props);

    this.state = { Pandor: "" };
  }

  componentWillMount() {
    fetch(Pandor)
      .then(response => response.text())
      .then(text => {
        this.setState({ Pandor: text });
      });
  }
  render() {
    const { Pandor } = this.state;
    return (
      <section className="section container  mx-auto">
        <div dangerouslySetInnerHTML={{ __html: md.render(Pandor) }} />
      </section>
    );
  }
}

export default Pandora;
