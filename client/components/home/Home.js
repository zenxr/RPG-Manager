// home landing page
import React, { Component } from 'react';
import {
  Grid,
  Image,
  Col,
  Well
} from 'react-bootstrap'


class Home extends Component {
  render () {
      return (
        <div className="Signup">
          <Grid>
            <Image src="images/logo.jpg" responsive/>
            <Col sm={10} smOffset={1}>
              <Well bsSize="large">Welcome to DnD App! You can easily manage your role-playing characters. Features to be implemented include: inventory, quest-log, groups, lore, skills, races, and more.</Well>
            </Col>
          </Grid>
        </div>);
  }
}

export default Home;
