import React, { Component } from "react";

class Tools extends Component {
  render() {
    return (
      <section className="container  mx-auto">
        <h2 id="setting-up-your-google-profile">
          Setting up your Google Profile
        </h2>
        <p>
          Our recommended browser for this course is chrome because it makes it
          easy to sign into multiple google accounts. Chances are that you have
          your own personal one and now you also have a
          <code>@g.toiohomai.ac.nz</code> one. So we need to keep those
          separate.
        </p>
        <p>Have a look at this gif to see how to sign into Chrome. </p>
        <p>
          <img
            src="https://cl.ly/1D2B331o2g2C/download/setup-google.gif"
            alt="setup google"
          />
        </p>
        <hr />
        <h2 id="what-is-microsoft-imagine">What is Microsoft Imagine</h2>
        <p>
          At the beginning of each semester we set the students up with a
          Microsoft Imagine Account. This allows you to download some free
          products from Microsoft that you would otherwise have to pay for. Once
          you have graduated or are no longer with us, you can keep the software
          and licenses, but you will not be able to access the website anymore.
        </p>
        <h2 id="setting-up-your-microsoft-imagine-account">
          Setting up your Microsoft Imagine Account
        </h2>
        <p>
          The details for your account have been sent to your
          <code>@student.toiohomai.ac.nz</code> email account which you can
          access here:
        </p>
        <p>
          <a href="https://outlook.office365.com/owa/?realm=student.toiohomai.ac.nz">
            <button className="btn btn-info">
              <i className="fa fa-envelope">&nbsp;</i>
              Student Email
            </button>
          </a>
        </p>
        <p>
          Once you have completed the sign up process (which is completely
          separate from your other accounts) you can then easily access the
          service by click on this link:
        </p>
        <p>
          <a href="https://e5.onthehub.com/WebStore/Security/Signin.aspx?ws=51c04b0b-9e50-e311-93f7-b8ca3a5db7a1">
            <button className="btn btn-primary">
              <i className="fa fa-microsoft" />
              Go To MS Imagine
            </button>
          </a>
        </p>
        <p>
          Below are some videos on how the process works. The looks are a little
          different, but the functionality is the same. (You can click on them
          to see bigger versions of them)
        </p>
      </section>
    );
  }
}

export default Tools;
