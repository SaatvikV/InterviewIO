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
            <div class="bg"></div>
            <div class="bg bg2"></div>
            <div class="bg bg3"></div>
            <Button className="button" variant="outline-dark" onClick={() => history.push('/Interview')}><span>Start Interview</span></Button>

          </form>
        </div>
      </div>
    );
  }
}
