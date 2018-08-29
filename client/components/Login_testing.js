import React, {Component} from 'react';
import axios from 'axios';
import querystring from 'querystring';

// redux imports
import PropTypes from "prop-types";
import { addUser } from "../redux/actions/index";
import { connect} from "react-redux"

import {
  Grid,
  Image,
  Col,
  Button,
  FormGroup,
  FormControl,
  ControlLabel
} from 'react-bootstrap'

const mapDispatchToProps = dispatch => {
  return {
    addUser : user => dispatch(addUser(user))
  };
};

class ConnectedLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      messageFromServer: "",
      user: ""
    };

    this.validateForm = this.validateForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit (event) {
    event.preventDefault();
    var self = this;
    // send an axios request to log in.
    axios.post('/login', {email: this.state.email, password: this.state.password })
    .then(function(response) {
      // if we get back a user, then we have been authenticated
      if(response.data){
        const user = response.data.user;
        self.props.addUser(user);
        // redirect the user
        const location = {
          pathname: '/profile_dev',
        }
        //self.props.history.push(location);
      }
      // unknown error
      else{
        console.log("Some error occured");
      }
    })
    // this error will throw for incorrect credentials
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    return (<div className="Login">
      <Grid>
        <Col sm={6} smOffset={3}>
          <Image src="images/logo.jpg" responsive/>
          <h1 className="text-center"><span className="fa fa-sign-in" /> Log In</h1>
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
              Login
            </Button>
          </form>
        </Col>
      </Grid>
    </div>);
  }
}

const Login = connect(null, mapDispatchToProps)(ConnectedLogin);

ConnectedLogin.propTypes = {
  addUser: PropTypes.func.isRequired
};

export default Login;
