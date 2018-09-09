import React, {Component} from 'react';

import {Link} from 'react-router-dom';

// redux imports
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import axios from 'axios';

// component and container imports
import DisplayCharacters from './DisplayCharacters';

import {
  Grid,
  Image,
  Col,
  Button,
  FormGroup,
  Well
} from 'react-bootstrap'

const mapStateToProps = state => {
  return { user: state.user.user };
};

class ConnectedProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userHasNoChars : false,
      characters : [],
    };

    this.getCharacters = this.getCharacters.bind(this);
  }

  getCharacters () {
    var self = this;
    axios.get(`/api/user/${this.props.user._id}/characters/`)
    .then(function(response) {
      if (response.data)
        if (response.data && response.data.length > 0){
          self.setState({
            characters : [...self.state.characters, ...response.data]
          });
        }
        else {
          self.setState({
            userHasNoChars: true
          });
        }
    })
    // this error will throw for incorrect credentials
    .catch(error => {
      // if this occurs, display failed login message
      console.log("Character Fetch Error : ");
      console.log(error);
    });
  }

  render() {
    if ( this.props && this.props.user && this.props.user._id ){
      if (this.state.characters && this.state.characters.length > 0){
        // we need to render the characterdisplay component
      }
      else{
        if (this.state.userHasNoChars){
          // then we won't render anything or query again
        }
        else {
          // we are unsure,
          // we need to get the characters
          this.getCharacters();
        }
      }
    }

    return (<div className="Signup">
      <Grid>
        <Col sm={6} smOffset={3}>
          <Image src="images/logo.jpg" responsive />
        </Col>
      </Grid>
      <Grid>
          <h1 className="text-center"><span className="fa fa-sign-in"/>
            Profile Page</h1>
        <Col sm={5}>
          {/* only display if we have a user */}
          { this.props && this.props.user && this.props.user._id &&
            <Well>
              <h3><span className="fa fa-wrench"></span> User Account</h3>
                  <p>
                      <strong>id</strong>: { this.props.user._id }<br />
                      <strong>email</strong>: { this.props.user.local.email }<br />
                      <strong>date</strong>: { this.props.user.date }<br />
                  </p><br />
                  <a href="/logout" className="btn btn-default btn-sm btn-block "><span className="fa fa-sign-out"></span><strong> Logout </strong></a>

            </Well>
          }
          <Well>
            <h3><span className="fa fa-link"></span> Links</h3>
            <div className="list-group">
              <Link to="/" className="list-group-item list-group-item-action">Home</Link>
              <Link to="/profile" className="list-group-item list-group-item-action">This page</Link>
              <Link to="/create" className="list-group-item list-group-item-action">Create a character</Link>
              <Link to="#" className="list-group-item list-group-item-action" disabled>DnD 5e API</Link>
              <Link to="#" className="list-group-item list-group-item-action" disabled>Show Characters</Link>
            </div>
          </Well>
        </Col>
        { this.state.characters && this.state.characters.length > 0 &&
          <DisplayCharacters characters={this.state.characters} />
        }
      </Grid>
    </div>);
  }
}

const Profile = connect(mapStateToProps)(ConnectedProfile);

ConnectedProfile.propTypes = {
  user: PropTypes.object.isRequired
};

export default Profile;
