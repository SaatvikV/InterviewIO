import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import history from './../history';
class Results extends Component {

  render() {
    return (
      <div className="Results">
        <div className="lander">
          <h1>Results</h1>
              <h2>{sessionStorage.getItem("key")}</h2>
            <Button variant="btn btn-success" onClick={() => this.buttonHandler("test")}>Click this button to add to history</Button>
        </div>
      </div>
    );
  }


    buttonHandler(string) {
        sessionStorage.setItem("key", "test");
        this.forceUpdate();
    }
}
export default Results;