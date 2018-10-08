import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import Notice from "./Docs/Notices/02-summer-of-tech.md";

class NoticeBoard extends Component {
  constructor(props) {
    super(props);

    this.state = { Notic: null };
  }

  componentWillMount() {
    fetch(Notice)
      .then(response => response.text())
      .then(text => {
        this.setState({ Notic: text });
      });
  }
  render() {
    return (
      <section className="section section03 container mx-auto ">
        <ReactMarkdown source={this.state.Notic} escapeHtml={false} />
      </section>
    );
  }
}

export default NoticeBoard;
