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

class Login extends Component {
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
    axios.post('/login', querystring.stringify({email: this.state.email, password: this.state.password}), {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }).then(function(response) {
      console.log(response.data);
      this.setState({messageFromServer: response.data});
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  render() {
    return (<div className="Login">
      <Grid>
        <Col sm={6} smOffset={3}>
          <Image src="images/logo.jpg" responsive="responsive"/>
          <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="email" bsSize="large">
              <ControlLabel>Email</ControlLabel>
              <FormControl autoFocus="autoFocus" type="email" value={this.state.email} onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">
              <ControlLabel>Password</ControlLabel>
              <FormControl value={this.state.password} onChange={this.handleChange} type="password"/>
            </FormGroup>
            <Button block="block" bsSize="large" disabled={!this.validateForm()} type="submit">
              Login
            </Button>
          </form>
        </Col>
      </Grid>
    </div>);
  }
}

export default Login;
