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
      <div className="container mx-auto">
        <FormControl>
          <TextField id="standard-name" label="Name" margin="normal" />
          <TextField id="standard-name" label="StudentID" margin="normal" />
          <TextField id="standard-name" label="Email" margin="normal" />
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
            label="Jocob"
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
        </FormControl>
      </div>
    );
  }
}

export default Contact;
