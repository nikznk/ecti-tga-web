import React, { Component } from "react";

class CorporateNetwork extends Component {
  state = {};
  render() {
    return (
      <section className="section03 container mx-auto">
        <h2>FAQ Related specifically to all students</h2>
        <p>
          <strong>What's my email address?</strong>
          <br />
          Your email address is in the format of{" "}
          <code>student-id@student.toiohomai.ac.nz</code>
        </p>
        <p>
          <strong>What's my username?</strong>
          <br />
          Your username address is in the format of{" "}
          <code>student-id@student.toiohomai.ac.nz</code>
        </p>

        <p>
          <strong>What's my password?</strong>
          <br /> Your initial password is <code>ToiOhomai</code> + your date of
          birth in numbers. For example, if your birthday is 1 January 1999,
          your password is ToiOhomai01011999 <br />
          Note: It is a capital O not a zero in ToiOhomai
        </p>
        <p>
          <em>
            Note that if you are locked out of your account you will need to go
            to the Atea on the 1st floor to get it unlocked
          </em>
        </p>

        <p>
          <strong>I can’t find my courses on Moodle. Where are they?</strong>
          <br />
          Moodle can be accessed directly via{" "}
          <a href="https://moodle.toiohomai.ac.nz">
            https://moodle.toiohomai.ac.nz
          </a>
        </p>

        <p>
          <strong>Where to I see all the student services?</strong>
          <br />
          For this we use getconnected.{" "}
          <a href="https://getconnected.toiohomai.ac.nz">
            https://getconnected.toiohomai.ac.nz
          </a>
          , Here you can find your print balance, your timetable and have access
          to other services.
        </p>

        <p>
          <strong>
            Can I store my files locally on a Toi Ohomai Institute of Technology
            PC?
          </strong>
          <br />
          On corporate machines (ie. library and drop-in lab on the first floor)
          you are able to store files on an H: drive. These drives cannot be
          access in a Pandora lab (DT219, DT303, DT308 and DT312).
          <br />
          You do however have access to a Google Drive, so if you wish to have
          access to your files on any pc, you are best to use that and access
          them via browser.
        </p>

        <p>
          <strong>
            What is a <code>@g.toiohomai.ac.nz</code> account?
          </strong>
        </p>
        <p>
          All students and staff in the Bongard IT Dept are provided with a
          Google Apps for Education account. This provides an unlimited Google
          drive account, and access to all the collaboration, communication and
          productivity tools of the Google suite.{" "}
        </p>
      </section>
    );
  }
}

export default CorporateNetwork;
