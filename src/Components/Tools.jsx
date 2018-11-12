import React, { Component } from "react";
import service from "./Docs/google.md";
import microsoft from "./Docs/microsoft.md";

// Enable everything
var md = require("markdown-it")({
  html: true,
  linkify: true,
  typographer: true
});
var markdownItAttrs = require("markdown-it-attrs");
md.use(markdownItAttrs);

class Tools extends Component {
  constructor(props) {
    super(props);

    this.state = {
      service: "",
      microsoft: ""
    };
  }

  componentWillMount() {
    var urls = ["service:" + service, "microsoft:" + microsoft];

    for (var url in urls) {
      let mdlabel = urls[url].split(":")[0];
      let mdfile = urls[url].split(":")[1];

      fetch(mdfile)
        .then(response => response.text())
        .then(text => {
          this.setState({ [mdlabel]: text });
        });
    }
  }
  render() {
    return (
      <section className="section container  mx-auto">
        <div
          dangerouslySetInnerHTML={{
            __html: md.render(this.state.service + "" + this.state.microsoft)
          }}
        />
      </section>
    );
  }
}

export default Tools;
