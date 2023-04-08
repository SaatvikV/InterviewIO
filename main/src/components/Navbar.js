import React from 'react';
import './Navbar.css';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import Results from '../Results/Results';
const Navigation = (props) => {
    console.log(props);
    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/Results">Results</Nav.Link>
                    <Button variant="btn btn-success" onClick={() => Results.buttonHandler("test")}>Click this button to update</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default withRouter(Navigation);