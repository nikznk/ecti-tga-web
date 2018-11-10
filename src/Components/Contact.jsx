import React, { Component } from "react";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

class Contact extends Component {
  state = {
    Andrew: true,
    Jacob: false,
    Jeffrey: false,
    John: false,
    Murray: false,
    Ray: false,
    Stefan: false
  };
  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  render() {
    const { Andrew, Jacob, Jeffrey, John, Murray, Ray, Stefan } = this.state;
    return (
      <div className="container mx-auto contact">
        <FormControl>
          <TextField id="standard-name" label="Name" margin="normal" />
          <TextField id="standard-name" label="StudentID" margin="normal" />
          <TextField id="standard-name" label="Email" margin="normal" />
          <div>
            Who to contact:
            <FormControlLabel
              control={
                <Checkbox
                  checked={Andrew}
                  onChange={this.handleChange("Andrew")}
                  value="Andrew"
                />
              }
              label="Andrew (Project Manger)"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={Jacob}
                  onChange={this.handleChange("Jacob")}
                  value="Jacob"
                />
              }
              label="Jacob"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={Jeffrey}
                  onChange={this.handleChange("Jeffrey")}
                  value="Jeffrey"
                />
              }
              label="Jeffrey"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={John}
                  onChange={this.handleChange("John")}
                  value="John"
                />
              }
              label="John"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={Murray}
                  onChange={this.handleChange("Murray")}
                  value="Murray"
                />
              }
              label="Murray"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={Ray}
                  onChange={this.handleChange("Ray")}
                  value="Ray"
                />
              }
              label="Ray"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={Stefan}
                  onChange={this.handleChange("Stefan")}
                  value="Stefan"
                />
              }
              label="Stefan"
            />
          </div>
          Subject:
          <div className="inline-block relative w-64">
            <select className="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
              <option>Please excuse me from class, because I am sick</option>
              <option>Please excuse me from class, because off...</option>
              <option>General Enquiry (non paper related)</option>
              <option>Feedback on the course</option>
            </select>
            <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
          Your Message:
          <TextField
            placeholder="Write you message here"
            multiline={true}
            rows={2}
            rowsMax={4}
          />
          <button class="bg-blue hover:bg-blue-light text-white font-bold py-2 px-4 border-b-4 border-blue-dark hover:border-blue rounded">
            Submit
          </button>
        </FormControl>
      </div>
    );
  }
}

export default Contact;
