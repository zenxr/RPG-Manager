import React, {Component} from 'react';
import axios from 'axios';
import querystring from 'querystring';

import {
  Grid,
  Image,
  Col,
  Button,
  FormGroup,
  Well
} from 'react-bootstrap'

class Profile extends Component {
  constructor(props) {
    super(props);
    console.log(props.location);
    if (props.location.state !== undefined ) {
      this.state = {
        user: props.location.state.user.user
      };
    }
  }

  render() {
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
          { this.state && this.state.user &&
            <Well>
              <h3><span className="fa fa-wrench"></span> User Account</h3>
                  <p>
                      <strong>id</strong>: { this.state.user._id }<br />
                      <strong>email</strong>: { this.state.user.local.email }<br />
                      <strong>date</strong>: { this.state.user.date }<br />
                  </p><br />
                  <a href="/logout" className="btn btn-default btn-sm btn-block "><span className="fa fa-sign-out"></span><strong> Logout </strong></a>

            </Well>
          }
          <Well>
            <h3><span className="fa fa-link"></span> Links</h3>
            <div className="list-group">
              <a href="/" className="list-group-item list-group-item-action">Home</a>
              <a href="/profile" className="list-group-item list-group-item-action">This page</a>
              <a href="/character" className="list-group-item list-group-item-action">Create a character</a>
              <a href="#" className="list-group-item list-group-item-action" disabled>DnD 5e API</a>
              <a href="#" className="list-group-item list-group-item-action" disabled>Show Characters</a>
            </div>
          </Well>
        </Col>
      </Grid>
    </div>);
  }
}

export default Profile;
