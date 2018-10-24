import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Navbar,Nav,NavItem} from 'react-bootstrap';
import './CustomNavBar.css';
 
export default class CustomNavBar extends Component {
  render() {
    return (
        <div className="testing-navBar">
            <div className="gsk-logo-section">
                <img src={require("./gsk_logo.jpeg")} className="gsk-logo" alt="Image not found" />
                <div className="rdip">RDIP</div>
            </div>
            <div className="status-bar">
                {/* <div className="header-status-bar">
                    <div className="header-status">
                        <HelpSupport />
                        <UserStatus />
                    </div>
                </div> */}

                    <Navbar collapseOnSelect className="statusBar">
                        <Navbar.Header>
                            <Navbar.Toggle /> 
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <Nav pullRight>
                                <NavItem eventKey={1} componentClass={Link} href="/help&support" to="/help&support">help&support</NavItem>
                                <NavItem eventKey={2} componentClass={Link} href="/login" to="/login">login</NavItem>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                <div>
                    <Navbar collapseOnSelect>
                        <Navbar.Header>
                            <Navbar.Toggle /> 
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <Nav>
                                <NavItem eventKey={1} componentClass={Link} href="/" to="/">Dashboard</NavItem>
                                <NavItem eventKey={2} componentClass={Link} href="/agents" to="/agents">Agents</NavItem>
                                <NavItem eventKey={3} componentClass={Link} href="/jobs" to="/jobs">Jobs</NavItem>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
        </div>
    );
  }
}