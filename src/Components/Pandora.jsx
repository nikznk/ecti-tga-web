import React, { Component } from "react";

class Pandora extends Component {
    state = {  }
    render() { 
        return (  
        <section className="section section03 container mx-auto">
        <h2 id="faq-related-specifically-to-span-stylecolor-bluecomputer-science-studentsspan-students-only">FAQ Related specifically to <span styles={"color: blue"}>Computer Science students</span> students only</h2>
      <p><strong>These questions are related to the pandora lab specifically</strong></p>
      <p><strong>What are the important dates for me to know?</strong></p>
      <table>
      <thead>
      <tr>
      <th id="semester" styles={"text-align:center;"}>Semester</th>
      <th id="start" styles={"text-align:left;"}>Start</th>
      <th id="break" styles={"text-align:left;"}>Break</th>
      <th id="end" styles={"text-align:left;"}>End</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td styles={"text-align:center;"}>Semester 1</td>
      <td styles={"text-align:left;"}>26th Feb 2018</td>
      <td styles={"text-align:left;"}>16th of April - 27th of April 2018</td>
      <td styles={"text-align:left;"}>29th of June 2018</td>
      </tr>
      <tr>
      <td styles={"text-align:center;"}>Semester 2</td>
      <td styles={"text-align:left;"}>23rd July 2018</td>
      <td styles={"text-align:left;"}>1st Oct 2018 - 12th Oct 2018</td>
      <td styles={"text-align:left;"}>23rd Novemer 2018</td>
      </tr>
      </tbody>
      </table>
      <p><strong>What are the differences between pandora and corporate files?</strong></p>
      <p>The corporate network (the library and classrooms other than the 3rd floor) and the Pandora network (DT219, DT303, DT308 and DT312) are 2 completely separate networks.</p>
      <p>On the corporate network you have an H drive to store you files, but you cannot access that drive when you are not using a pc from the corporate institute. H drive's a volitile storage places, this means you <strong>MUST BACK UP YOUR FILES SOMEWHERE ELSE</strong>. A good place to use as primary storage is the Google drive from your <code>@g.toiohomai.ac.nz</code> account.</p>
      <p><strong>How do I connect to the Toi Ohomai Wi-Fi Network in Pandora?</strong></p>
      <p>The student Wi-Fi is managed through your corporate login and is therefore completely separate from the Pandora Network. If you are using your own device or connect your mobile device you are able to logon to the Wi-Fi to browse the web, but you won't have access to any resources on the Pandora Network.</p>
      <p>There are some exceptions, but you will hear about the relevant papers you will do in your degree. </p>
      <p>To connect your device to the Student Wifi do this:</p>
      <p>Select Toi Ohomai Wi-Fi in your Wifi Settings<br/>
      Username = <strong><code>student-id@student.toiohomai.ac.nz</code></strong><br/>
      Password = Your <strong>corporate</strong> password (the 16 character one)</p>
      <p><strong>Can I access the anything on the Pandora Network from Home?</strong></p>
      <p>Simple answer - No you cannot.<br/>
      However your course material is on Moodle and you can put files on Google drive and you are able to access what you need from there.</p>
      <p>In terms of software, everything we use in the labs is available for free either through MS Imagine or a student service or the program is actually free to download.</p>
      <p><strong>Where is the information about my courses?</strong></p>
      <p>Course outlines will be provided on Moodle, along with assessment information.<br/>
      A general description of the papers is also available on the <a href="https://toiohomai.ac.nz/study/computing-course-papers-and-topics">Toi Ohomai website</a>.</p>
      <p><strong>How can contact staff and other students?</strong></p>
      <p>You can use the <a href="/contact">contact</a> form on this website, or email the tutors directly.</p>
      </section>);
    }
}
 
export default Pandora;