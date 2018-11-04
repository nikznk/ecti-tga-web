import React, { Component } from "react";
import corporate from "./Docs/corporate.md";

// Enable everything
var md = require("markdown-it")({
  html: true,
  linkify: true,
  typographer: true
});
var markdownItAttrs = require("markdown-it-attrs");
md.use(markdownItAttrs);

class CorporateNetwork extends Component {
  constructor(props) {
    super(props);

    this.state = { corporate: "" };
  }

  componentWillMount() {
    fetch(corporate)
      .then(response => response.text())
      .then(text => {
        this.setState({ corporate: text });
      });
  }
  render() {
    const { corporate } = this.state;
    return (
      <section className="section section03 container  mx-auto ">
        <div dangerouslySetInnerHTML={{ __html: md.render(corporate) }} />
      </section>
    );
  }
}

export default CorporateNetwork;
