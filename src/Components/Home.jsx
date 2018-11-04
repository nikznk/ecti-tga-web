import React, { Component } from "react";
import Homee from "./Docs/home.md";

// Enable everything
var md = require("markdown-it")({
  html: true,
  linkify: true,
  typographer: true
});
var markdownItAttrs = require("markdown-it-attrs");
md.use(markdownItAttrs);

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = { Homee: "" };
  }

  componentWillMount() {
    fetch(Homee)
      .then(response => response.text())
      .then(text => {
        this.setState({ Homee: text });
      });
  }
  render() {
    const { Homee } = this.state;
    return (
      <section className="section section03 container  mx-auto ">
        <div dangerouslySetInnerHTML={{ __html: md.render(Homee) }} />
      </section>
    );
  }
}

export default Home;
