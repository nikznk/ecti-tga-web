import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import Notice from "./Docs/Notices/02-summer-of-tech.md";
import Not from "./Docs/Notices/01-welcome-back.md";

var md = require("markdown-it")({
  html: true,
  linkify: true,
  typographer: true
});
var markdownItAttrs = require("markdown-it-attrs");
md.use(markdownItAttrs);

class NoticeBoard extends Component {
  constructor(props) {
    super(props);

    this.state = { Notic: null };
    this.state = { NOti: null };
  }

  componentWillMount() {
    fetch(Notice)
      .then(response => response.text())
      .then(text => {
        this.setState({ Notic: text });
      });
    fetch(Not)
      .then(response => response.text())
      .then(text => {
        this.setState({ NOti: text });
      });
  }
  render() {
    return (
      <section className="section section03 container mx-auto ">
        <ReactMarkdown source={this.state.Notic} escapeHtml={false} />
        <ReactMarkdown source={this.state.NOti} escapeHtml={false} />
      </section>
    );
  }
}

export default NoticeBoard;
