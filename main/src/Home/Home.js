import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import history from './../history';
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>Welcome to InterviewIO!</h1>
          <form>
            <Button variant="outline-dark" onClick={() => history.push('/Interview')}>Click this button to start the interview</Button>
          </form>
        </div>
      </div>
    );
  }
}
