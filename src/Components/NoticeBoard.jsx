import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import Notice from "./Docs/Notices.md";

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
        this.setState({ Notice: text });
      });
  }
  render() {
    return (
      <section className="section container notices  mx-auto ">
        <ReactMarkdown source={this.state.Notice} escapeHtml={false} />
      </section>
    );
  }
}

export default NoticeBoard;
