import React from "react";
import axios from "axios"
import { Recorder } from "react-voice-recorder";
import { Button } from 'react-bootstrap';
import Results from '../Results/Results';
import "react-voice-recorder/dist/index.css";
import history from './../history';


export default class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      audioURL: null,
      audioDetails: {
        url: null,
        blob: null,
        chunks: null,
        duration: {
          h: 0,
          m: 0,
          s: 0
        }
      }
    };
  }
  handleAudioStop(data) {
    console.log(data);
    this.setState({ audioDetails: data });

    axios({
      method: "GET",
      url: "/test"
    }).then((response) => {
      const res = response.data
      console.log(res)
    }).catch((error) => {
      if(error.response) {
        console.log(error.response)
      }
    })
    //console.log(data);
  }
  handleAudioUpload(file) {
    console.log(file);
  }
  handleRest() {
    const reset = {
      url: null,
      blob: null,
      chunks: null,
      duration: {
        h: 0,
        m: 0,
        s: 0
      }
    };
    this.setState({ audioDetails: reset });
  }
  render() {
    return (
      <div className="App">
        <Recorder
          record={true}
          title={"New recording"}
          audioURL={this.state.audioDetails.url}
          showUIAudio
          handleAudioStop={(data) => this.handleAudioStop(data)}
          handleAudioUpload={(data) => this.handleAudioUpload(data)}
          handleRest={() => this.handleRest()}
        />
        <form>
             <Button variant="btn btn-success" onClick={() => Results.buttonHandler(["msg1", "msg2", "msg3"])}>Click this to add to history</Button>
            <Button variant="btn btn-success" onClick={() => history.push('/Results')}>Click this button to end the interview</Button>
        </form>

      </div>
    );
  }
}