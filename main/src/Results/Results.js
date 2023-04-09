import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import history from './../history';
import "./Results.css";
class Results extends Component {

  render() {
    const num_convos = sessionStorage.getItem("num_items");
    var hist = [];
    for (var i = 1; i <= num_convos; i++) {
        const gdate = sessionStorage.getItem("item"+ i + "date");
        const gmonth = sessionStorage.getItem("item"+ i + "month");
        const gyear = sessionStorage.getItem("item"+ i + "year");
        const gtime = sessionStorage.getItem("item"+ i + "time");
        const glength = sessionStorage.getItem("item" + i + "length");
        var msgs = [];
        for (var j = 0; j < glength; j++) {
            msgs.push(sessionStorage.getItem("item" + i + "msg" + j));
        }
        hist.push({date: (parseInt(gmonth) + 1) + "/" + gdate + "/" +gyear, time: gtime, length: glength, msg: msgs});
    }
    return (

      <div className="Results">
        <div className="lander">
          <h1>Interview History</h1>
           <ul>
      {hist.map((data) => (
        <li key={data.time}>
            <Button variant="btn btn-success" onClick={() => console.log("click")}>Date: {data.date}&nbsp;&nbsp; Time: {data.time} &nbsp;&nbsp;Conversation Length: {data.length}</Button>
        </li>
      ))}
    </ul>
        </div>
      </div>
    );
  }


    static buttonHandler(convo) {
    const currentDate = new Date();
    const datetemp = currentDate.getDate();
    const monthtemp = currentDate.getMonth();
    const yeartemp = currentDate.getFullYear();
    const timetemp = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
    var num = sessionStorage.getItem("num_items");
    if (num == null)   {
        sessionStorage.setItem("num_items", "0");
        num = "0";
    }

    var num = parseInt(num) + 1;
    const numString = num.toString();
    sessionStorage.setItem("num_items", num);
    sessionStorage.setItem("item" + numString + "date", datetemp);
    sessionStorage.setItem("item" + numString + "month", monthtemp);
    sessionStorage.setItem("item" + numString + "year", yeartemp);
    sessionStorage.setItem("item" + numString + "time", timetemp);
    sessionStorage.setItem("item" + numString + "length", convo.length);
    for (var i = 0; i < convo.length; i++) {
        sessionStorage.setItem("item"+ numString + "msg" + i, convo[i]);
    }




    }

}
export default Results;