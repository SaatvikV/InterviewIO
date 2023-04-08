import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import history from './../history';


export default class Results extends Component {
   constructor() {
    super();
    this.state = {history : ["a", "b"]};
   }
  render() {

    return (
      <div className="Results">
        <div className="lander">
          <h1>Results</h1>
            <h2>{this.state.history}</h2>
            <Button variant="btn btn-success" onClick={() => this.buttonHandler("test")}>Click this button to add to history</Button>
        </div>
      </div>
    );
  }

    buttonHandler(string) {
        this.appendHis(string);
        this.render();
    }
  appendHis(string) {
    this.setState((state) => {
    // Important: read `state` instead of `this.state` when updating.
    return {history: state.history.concat(["string"])}
  });
  }
}