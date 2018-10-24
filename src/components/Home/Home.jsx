import React, { Component } from 'react';
import {Jumbotron,Grid} from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
        <Grid>
            <Jumbotron>
                <h2> Welcome </h2>
            </Jumbotron>
        </Grid>
    );
  }
}


