import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <section className="section section03 container  mx-auto ">
        <h2 id="information-for-pandora-network">
          Information for Pandora Network
        </h2>
        <ul>
          <li>
            <a href="/corporate">Corporate Network</a> and{" "}
            <a href="/pandora">Pandora</a> - What is the difference?
          </li>
          <li>
            Setting up your <a href="/tools">Google (GAFE)</a> and{" "}
            <a href="/tools">Microsoft Imagine Account</a>
          </li>
          <li>
            Find notices on <a href="/notices">notice board</a>
          </li>
          <li>
            Contact us via our <a href="/contact">contact form</a>
          </li>
          <li>
            Toi Ohomai on{" "}
            <a href="https://toiohomai.ac.nz/life/social-media">Social Media</a>
          </li>
        </ul>
        <h2 id="general-student-offers">General student offers</h2>
        <ul>
          <li>
            As a student of Toi Ohomai Institute of Technology, you also gain
            the benefits the students gain from other courses.
          </li>
          <li>
            Most of them are listed on the{" "}
            <a href="https://getconnected.toiohomai.ac.nz/myplace">
              getconnected
            </a>{" "}
            website, but here are the most common links.
          </li>
          <li>
            To access Moodle go here = &gt;{" "}
            <a href="https://moodle.toiohomai.ac.nz">
              https://moodle.toiohomai.ac.nz
            </a>
          </li>
          <li>
            To download Office 2016 as part of Office 365 go here =&gt;{" "}
            <a href="https://portal.office.com/Home">
              https://portal.office.com/Home
            </a>
          </li>
          <li>
            To access your student webmail account go here =&gt;{" "}
            <a href="https://outlook.office365.com/owa/?realm=student.toiohomai.ac.nz">
              Outlook Webmail
            </a>
          </li>
        </ul>
        <h2 id="using-the-student-wi-fi">Using the Student Wi-Fi</h2>
        <p>
          To connect your device to the Student Wifi do this:
          <br />
          Select Toi Ohomai Wi-Fi in your Wifi Settings
        </p>
        <p>
          Username ={" "}
          <strong>
            <code>student-id@student.toiohomai.ac.nz</code>
          </strong>
          <br />
          Password = Your <strong>corporate</strong> password (the 16 character
          one)
        </p>
        <h2 id="timetable">Timetable</h2>
        <p>
          You can see it here on a{" "}
          <a
            href="https://docs.google.com/spreadsheets/d/1BNIFwYjH3DzgI-nTBoLueWMPF6fIU8tVP08_5_yu6n8/edit?usp=sharing"
            target=""
          >
            Google Sheet
          </a>
          <br />
          Your timetables will also be available on Moodle and getConnected
        </p>
        <h2 id="regulations-and-student-conduct">
          Regulations and Student Conduct
        </h2>
        <ul>
          <li>
            <a href="https://toiohomai.ac.nz/sites/default/files/inline-files/Student%20Code%20of%20Conduct%20from%202018%20Regs.pdf">
              Student Code of Conduct
            </a>
          </li>
          <li>
            <a href="https://toiohomai.ac.nz/sites/default/files/inline-files/Toi%20Ohomai_Enrolment%20Terms%20and%20Conditions_2018.pdf">
              2018 Student terms and condition of enrolment
            </a>
          </li>
          <li>
            <a href="https://toiohomai.ac.nz/sites/default/files/inline-files/2018%20Regulatory%20Framework%20%28approved%20AB121017%29.pdf">
              2018 Regulatory Framework for Quality Assurance
            </a>
          </li>
        </ul>
        <h2 id="any-questions">Any Questions?</h2>
        <p>
          If you have any questions, ask any of the IT staff and we can help you
          out.
        </p>
        <p>
          You can also the contact tab to contact a tutor directly. However
          please refrain from using the form for course specific questions and
          use the tutors prefered way of contact.
        </p>
        <p>
          <strong>Remember</strong>
        </p>
        <p>
          If you cannot make it to class for any reason, please use the contact
          form to let us know.
        </p>
      </section>
    );
  }
}

export default Home;
