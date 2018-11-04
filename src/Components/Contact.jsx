import React, { Component } from "react";

class Contact extends Component {
  state = {};
  render() {
    return (
      <form
        class="form container mx-auto"
        method="POST"
        name="tga_contact"
        action="/send"
      >
        <div class="form-group">
          <label for="name">Your Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            class="form-control"
            autofocus
            required
          />
        </div>
        <div class="form-group">
          <label for="studentid">Your Student ID:</label>
          <input
            type="numbr"
            pattern="[0-9]*"
            name="studentid"
            id="studentid"
            class="form-control"
            required
          />
        </div>
        <div class="form-group">
          <label for="email">Your Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            class="form-control"
            required
          />
        </div>
        <div class="form-group">
          <label for="name">Who to contact:</label>
          <div class="form-check" styles={"font-size: 1.2em"}>
            <input
              type="checkbox"
              name="contact"
              id="andrew"
              class="form-check-input check-scale"
              value="andrew.chapman"
            />
            <label class="form-check-label" for="andrew">
              Andrew (Program Manager)
            </label>
          </div>
          <div class="form-check">
            <input
              type="checkbox"
              name="contact"
              id="jacob"
              class="form-check-input check-scale"
              value="jacob.vansilfhout"
            />
            <label class="form-check-label" for="jacob">
              Jacob
            </label>
          </div>
          <div class="form-check">
            <input
              type="checkbox"
              name="contact"
              id="jeffrey"
              class="form-check-input check-scale"
              value="jeffrey.kranenburg"
            />
            <label class="form-check-label" for="jeffrey">
              Jeffrey
            </label>
          </div>
          <div class="form-check">
            <input
              type="checkbox"
              name="contact"
              id="john"
              class="form-check-input check-scale"
              value="john.achilles"
            />
            <label class="form-check-label" for="john">
              John
            </label>
          </div>
          <div class="form-check">
            <input
              type="checkbox"
              name="contact"
              id="murray"
              class="form-check-input check-scale"
              value="murray.foote"
            />
            <label class="form-check-label" for="murray">
              Murray
            </label>
          </div>
          <div class="form-check">
            <input
              type="checkbox"
              name="contact"
              id="ray"
              class="form-check-input check-scale"
              value="ray.scott"
            />
            <label class="form-check-label" for="ray">
              Ray
            </label>
          </div>
          <div class="form-check">
            <input
              type="checkbox"
              name="contact"
              id="stefan"
              class="form-check-input check-scale"
              value="stefan.stasiewicz"
            />
            <label class="form-check-label" for="stefan">
              Stefan
            </label>
          </div>
        </div>
        <div class="form-group">
          <label for="subjectid">Subject:</label>
          <select class="form-control" id="subjectid" name="subjectid">
            <option value="" disabled selected>
              Select your option
            </option>
            <option value="sick">
              Please excuse me from class, because I am sick
            </option>
            <option value="excuse">
              Please excuse me from class, because off...
            </option>
            <option value="general">General Enquiry (non paper related)</option>
            <option value="feedback">Feedback on the course</option>
          </select>
        </div>
        <div class="form-group">
          <label for="name">Your Message:</label>
          <textarea
            type="text"
            name="msg"
            id="msg"
            class="form-control"
            rows="10"
          />
        </div>
        <div class="form-group">
          <input
            type="submit"
            class="form-control btn btn-info"
            value="Send Message"
            id="submit"
            name="submit"
          />
        </div>
      </form>
    );
  }
}

export default Contact;
