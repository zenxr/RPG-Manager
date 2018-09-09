import React, {Component} from 'react';
import axios from 'axios';
import querystring from 'querystring';

import {
  Grid,
  Image,
  Col,
  Button,
  FormGroup,
  FormControl,
  ControlLabel
} from 'react-bootstrap'

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      messageFromServer: ""
    };

    this.validateForm = this.validateForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleSubmit(event) {
    event.preventDefault();
    // send an axios request to log in.
    // user data should be kept after via redux
    axios.post('/signup', {email: this.state.email, password: this.state.password})
    .then(function(response) {
      console.log(response.data);
      this.setState({messageFromServer: response.data});
    })
    .catch(error => {
      // if this occurs, display failed login message
      console.log("Signup error : ");
      console.log(error);
      self.setState(self.state.messageFromServer = error);
      //self.state.messageFromServer = error;
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  render() {
    return (<div className="Signup">
      <Grid>
        <Col sm={6} smOffset={3}>
          <Image src="images/logo.jpg" responsive/>
          <h1 className="text-center"><span className="fa fa-sign-in" /> Sign Up</h1>
          { this.state.messageFromServer &&
            <div className="alert alert-danger">Failed to sign up. Does user already exist?</div>
          }
          <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="email" bsSize="large">
              <ControlLabel>Email</ControlLabel>
              <FormControl autoFocus="autoFocus" type="email" value={this.state.email} onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">
              <ControlLabel>Password</ControlLabel>
              <FormControl value={this.state.password} onChange={this.handleChange} type="password"/>
            </FormGroup>
            <Button block bsSize="large" disabled={!this.validateForm()} type="submit">
              Sign up
            </Button>
          </form>
        </Col>
      </Grid>
    </div>);
  }
}

export default Signup;
