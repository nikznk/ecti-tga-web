import React, { Component } from "react";

class NoticeBoard extends Component {
  state = {};
  render() {
    return (
      <section class="section section03 mx-auto ">
        <h2 id="summer-of-tech">Summer of Tech</h2>
        <p>
          You can earn from $6,000 - $10,000 during your summer holiday by
          landing an IT Internship. <strong>FACT!</strong>
        </p>
        <p>
          Summer of Tech is a non-profit programme, which helps students from NZ
          tertiary institutions, find full-time PAID internships in the IT
          industry. Typically from November – February, students work on real
          tech projects with a host employer for approximately 400 hours where
          you develop practical and work-based skills.
        </p>
        <p>And the best bit…you get PAID.</p>
        <blockquote>
          <p>
            <strong>Wednesday 25th July at 10:30am – 11:30am</strong>
          </p>
        </blockquote>
        <p>
          Summer of Tech are presenting at the Bongard Centre to tell you how
          they help you to get one of these awesome internships, give you
          guidance on your CV and former student interns and host employers will
          be there to give you the heads up on what it is like to be an Intern.
          Check them out online as well for more information.
        </p>
        <blockquote>
          <p>
            <strong>No need to register, just head along to DT207.</strong>
          </p>
        </blockquote>
        <p>
          <a href="https://github.com/Summer">@Summer</a> of Tech is a
          non-profit programme, which helps students from NZ tertiary
          institutions, find full-time PAID internships in the IT industry.
          Typically from November – February, students work on real tech
          projects with a host employer for approximately 400 hours where you
          develop practical and work-based skills.
        </p>
        <div
          styles={
            "background-color:#aaa; padding: 20px; box-sizing: border-box; font-size: 0.7em;"
          }
        >
          <h3 styles={"color:red"}>Older Messages</h3>
          <h2 id="welcome-back">Welcome Back!</h2>
          <p>
            Semester 2 2018 promises to be a good one. Level 6 Projects are
            kicking off for the first time here at Bongard and we are very
            excited about seeing our students put all that theory into practice.
            Keep an eye out for industry based opportunities and grab them when
            you can.
          </p>
          <p>
            <strong>Absence Notification:</strong> Check out our new absence
            notification system on the Contact Page. Easy as. Thanks Jeff.
          </p>
          <p>
            <strong>Student Reps:</strong> We need 2 student reps for each
            intake of our programmes. It’s a good way to be involved. First
            meeting 12:30 Wed 25 then every fortnight.
          </p>
          <p>
            <strong>ALLIGNZ:</strong> It recruitment agency presenting Level 5
            Café Tuesday 24 July at 12pm. Job opportunities!! Level 5 that
            includes you. Go listen.
          </p>
        </div>
      </section>
    );
  }
}

export default NoticeBoard;
