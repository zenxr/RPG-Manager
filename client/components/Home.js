import React, { Component } from 'react';

import {
  Grid,
  Image,
  Col
} from 'react-bootstrap'

class AppNavbar extends Component {
  render () {
    return (
      <div>
        <Grid>
          <Col sm={6} smOffset={3}>
            <Image src="images/logo.jpg" responsive />
            <h1 class="text-center"><span class="fa fa-sign-in"></span> Login</h1>
            <form action="/login" method="post">
                <div class="form-group">
                    <label>Email</label>
                    <input type="text" class="form-control" name="email"/>
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" class="form-control" name="password"/>
                </div>

                <button type="submit" class="btn btn-warning btn-lg">Login</button>
            </form>
          </Col>
        </Grid>
      </div>
    );
  }
}

export default AppNavbar;
