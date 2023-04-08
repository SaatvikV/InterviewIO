import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import history from './../history';
import CommonDataManager from '../CommonDataManager';
class Results extends Component {

   constructor() {
     super();
   }
  render() {
    return (
      <div className="Results">
        <div className="lander">
          <h1>Results</h1>
              <h2>{this.getData()}</h2>
            <Button variant="btn btn-success" onClick={() => this.buttonHandler("test")}>Click this button to add to history</Button>
        </div>
      </div>
    );
  }

    setData(string){
        let commonData = CommonDataManager.getInstance();
        commonData.setUserID(string);
    }

     getData(){
        let commonData = CommonDataManager.getInstance();
        return commonData.getUserID();
    }
    buttonHandler(string) {
        this.setData(string);
        this.forceUpdate();
    }
}
export default Results;