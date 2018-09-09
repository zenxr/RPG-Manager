/* User is passed in via props
use axios to request a list of characters, then display them
*/

// this is a presentational (non-connected) component
import React from 'react';
import {Link} from 'react-router-dom';

import {
  Grid,
  Image,
  Col,
  Button,
  FormGroup,
  Well
} from 'react-bootstrap'

const DisplayCharacters = ( props ) => {

    let characterView = props.characters.map((character, i) => {
      return (
        <Well key={i}>
          <h3><span className="fa fa-user"></span>{character.name}</h3>
          <p>
            <strong>ID</strong>: {character._id}<br/>
            <strong>Class</strong>: {character.class}<br/>
            <strong>Race</strong>: {character.race}<br/>
            <strong>Level</strong>: {character.level}<br/>
          </p>
        </Well>
      )
    });

    return (
      <Col sm={7}>
        {characterView}
      </Col>
    );
};

export default DisplayCharacters;
