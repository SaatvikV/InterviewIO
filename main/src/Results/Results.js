import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import history from './../history';
class Results extends Component {

  render() {
    return (
      <div className="Results">
        <div className="lander">
          <h1>Interview History</h1>
              <h2>{sessionStorage.getItem("history")}</h2>
        </div>
      </div>
    );
  }


    static buttonHandler(string) {
        if (sessionStorage.getItem("history")!== null){
           sessionStorage.setItem("history", sessionStorage.getItem("history").concat([string]));
        } else {
           sessionStorage.setItem("history", ["test1"])
        }
    }
}
export default Results;