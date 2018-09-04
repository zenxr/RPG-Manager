import React, {Component} from 'react';
import axios from 'axios';

// redux imports
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  Grid,
  Image,
  Col,
  Button,
  FormGroup,
  FormControl,
  ControlLabel
} from 'react-bootstrap'

const mapStateToProps = state => {
  return { user: state.user.user };
};

class ConnectedCharacterCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      race: "",
      class: "",
      messageFromServer: ""
    };

    this.validateForm = this.validateForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateForm() {
    return this.state.name.length > 0 && this.state.race.length > 0 && this.state.class.length > 0;
  }

  handleSubmit(event) {
    event.preventDefault();
    // send an axios request to log in.
    // user data should be kept after via redux
    var self = this;

    axios.post('/character', {
      name: this.state.name,
      race: this.state.race,
      class: this.state.class,
      user: this.props.user._id
    })
    .then(function(response){
      const location = {
        pathname: '/profile',
      }
      self.props.history.push(location);
    })
    .catch(error => {
      // if this occurs, display failed login message
      console.log("Character creation error : ");
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
          <h1 className="text-center"><span className="fa fa-sign-in" />Create a Character</h1>
          { this.state.messageFromServer &&
            <div className="alert alert-danger">Failed to create character.</div>
          }
          <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="name" bsSize="large">
              <ControlLabel>Name</ControlLabel>
              <FormControl autoFocus="autoFocus" value={this.state.name} onChange={this.handleChange} type="text"/>
            </FormGroup>
            <FormGroup controlId="race" bsSize="large">
              <ControlLabel>Race</ControlLabel>
              <FormControl value={this.state.race} onChange={this.handleChange} type="text"/>
            </FormGroup>
            <FormGroup controlId="class" bsSize="large">
              <ControlLabel>Class</ControlLabel>
              <FormControl value={this.state.class} onChange={this.handleChange} type="text"/>
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

const CharacterCreate = connect(mapStateToProps)(ConnectedCharacterCreate);

ConnectedCharacterCreate.propTypes = {
  user: PropTypes.object.isRequired
};

export default CharacterCreate;
