import React, { Component } from 'react';
import {Tabs,Tab} from 'react-bootstrap';
import NewAgent from './NewAgent';
import MyAgents from './MyAgents';

export default class Agents extends Component {

  render() {
    return (
      <Tabs>
        <Tab eventKey={1} title="New Agent">
          <NewAgent />
       </Tab>
        <Tab eventKey={2} title="My Agents">
          <MyAgents />
        </Tab>
      </Tabs>
    );
  }
}