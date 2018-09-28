import React, { Component } from 'react';
import logo from './img/logo.png';
import './App.scss';

let welcomeText = "Toi Ohomai Institute of Technology Bachelor of Computing and Mathematical Science This intranet is for students who are completing the either the University of Waikato Pathway, or the Toi Ohomai Degree in Web or Software pathway. On this little mini-site you can find information specific to the Pandora labs that are used as part of your course.";

class App extends Component {


  toggle = (type) => {
    this.setState({
      toggle: type
    })
  }


  state ={
    press : true
  }
  press = () =>{
    this.setState({
      press: !this.state.press
    })
  }
  render() {
    return (
      <div>
        <header>
          <div className="container mx-auto">
            <div className="container-menu">
              <img src={logo} alt="Toi ohomai" />
              <nav className="flex list-reset justify-end">
                <li className="mx-3">
                  <a href="">Home</a>
                </li>
                <li className="mx-3">
                  <a href="">Corporate Network</a>
                </li>
                <li className="mx-3">
                  <a href="">Pandora Network</a>
                </li>
                <li className="mx-3">
                  <a href="">3rd Party Services</a>
                </li>
                <li className="mx-3">
                  <a href="">Noticeboard</a>
                </li>
                <li className="mx-3">
                  <a href="">Contact Us</a>
                </li>
              </nav>
            </div>
            <div className="container-welcome">
              <h1 class="fw-500">Welcome to Pandora!</h1>
              <h2 class="fw-400">Toi Ohomai Tauranga Computer Science Lab</h2>
              <p>
                {welcomeText}
              </p>
              <br />
              <button  onClick={() => this.toggle('P')}class="bg-black hover:bg-blue-dark text-white  py-2 px-4 rounded">Pandora</button>
              <button  onClick={() => this.toggle('C')} class="bg-black hover:bg-blue-dark text-white  py-2 px-4 rounded">Corporate Network</button>
            </div>
          </div>
        </header>
        
        {this.state.toggle == "P" &&
         <Pandora/>
        }
        {this.state.toggle == "C" &&
         <CorporateNetwork/>
        }
       
       <Footer/>   
      </div>
    );
  }
}




class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
        <section>
          <div className="container mx-auto footer">
            <img src={logo} alt="Toi ohomai" />
          </div>
          <div className="col col02">200 Cameron Road, Tauranga</div>
          <div className="col col03"></div>
        </section>
        </footer>
      </div>
    );
  }
}
class CorporateNetwork extends Component {
  render() {
    return (
      <section className="section03 container mx-auto">
          <h2>FAQ Related specifically to all students</h2>
          <p><strong>What's my email address?</strong><br />Your email address is in the format of <code>student-id@student.toiohomai.ac.nz</code></p>
          <p><strong>What's my username?</strong><br />Your username address is in the format of <code>student-id@student.toiohomai.ac.nz</code></p>
  
          <p><strong>What's my password?</strong><br /> Your initial password is <code>ToiOhomai</code> + your date of birth in numbers. For example, if your
              birthday is 1 January 1999, your password is ToiOhomai01011999 <br />Note: It is a capital O not a zero in ToiOhomai</p><p><em>Note that if you are locked out of your account you will need to go to the Atea on the 1st floor to get
                  it unlocked</em></p>
  
  
          <p><strong>I can’t find my courses on Moodle. Where are they?</strong><br />
            Moodle can be accessed directly via <a href="https://moodle.toiohomai.ac.nz">https://moodle.toiohomai.ac.nz</a></p>
  
          <p><strong>Where to I see all the student services?</strong><br />
            For this we use getconnected. <a href="https://getconnected.toiohomai.ac.nz">https://getconnected.toiohomai.ac.nz</a>,
              Here you can find your print balance, your timetable and have access to other services.</p>
  
          <p><strong>Can I store my files locally on a Toi Ohomai Institute of Technology PC?</strong><br />
            On corporate machines (ie. library and drop-in lab on the first floor) you are able to store files on an H:
              drive. These drives cannot be access in a Pandora lab (DT219, DT303, DT308 and DT312).<br />
            You do however have access to a Google Drive, so if you wish to have access to your files on any pc, you
              are best to use that and access them via browser.</p>
  
          <p><strong>What is a <code>@g.toiohomai.ac.nz</code> account?</strong></p>
          <p>All students and staff in the Bongard IT Dept are provided with a Google Apps for Education account. This
              provides an unlimited Google drive account, and access to all the collaboration, communication and
              productivity tools of the Google suite. </p>
        </section>
    );
  }
}

class Pandora extends Component{
  render(){
    return(
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
        </section>
    );
  }
}

export default App;
