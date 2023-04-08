import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import history from './../history';
import "./Results.css";
class Results extends Component {

  render() {
         if (sessionStorage.getItem("history")== null){
           sessionStorage.setItem("history", [])
        }
    return (

      <div className="Results">
        <div className="lander">
          <h1>Interview History</h1>
           <ul>
      {sessionStorage.getItem("history").map((data) => (
        <li>
          <p>{data.date}</p>
          <p>{data.time}</p>
          <p>{data.msg}</p>
        </li>
      ))}
    </ul>
        </div>
      </div>
    );
  }


    static buttonHandler(convo) {
    let currentDate = new Date();
    let datetemp = currentDate.getDate();
    let timetemp = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
        if (sessionStorage.getItem("history")== null){
           sessionStorage.setItem("history", [])
        }
        sessionStorage.setItem("history", sessionStorage.getItem("history").concat({date: datetemp, time: timetemp, msg: convo}));
    }
}
export default Results;