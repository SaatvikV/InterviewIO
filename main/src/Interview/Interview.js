import React from "react";
import axios from "axios"
import { Recorder } from "react-voice-recorder";
import { Button } from 'react-bootstrap';
import Results from '../Results/Results';
import "react-voice-recorder/dist/index.css";
import history from './../history';
import "./Interview.css";
import Speech from 'react-speech';


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
  handleAudioStop(record) {
    console.log(record);
    this.setState({ audioDetails: record });
    
    axios({
      method: 'post',
      url: '/audio',
      params: {
        'words': 'how are you?'
      }
    }).then((response) => {
      const res = response.data
      console.log(res)
    }).catch((error) => {
      if(error.response) {
        console.log(error.response)
      }
    })

    // axios({
    //   method: 'post',
    //   url: '/test',
    //   params: {
    //     'firstName': 1,
    //     'lastName': 2
    //   }
    // }).then((response) => {
    //   const res = response.data
    //   console.log(res)
    // }).catch((error) => {
    //   if(error.response) {
    //     console.log(error.response)
    //   }
    // })
    //console.log(data);
    this.handleReset();
  }
  handleReset() {
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
            <Speech 
  text="Hello! Welcome to the interview! Please tell me a bit about yourself!" 
  voice="Google UK English Female" />
        <Recorder
          record={true}
          audioURL={this.state.audioDetails.url}
          uploadButtonDisabled = {true}
          handleAudioStop={(audioURL) => this.handleAudioStop(audioURL)}
          handleReset={() => this.handleReset()}
        />
        <form>
             <Button variant="outline-dark" onClick={() => Results.buttonHandler(["msg1", "msg2", "msg3"])}>Click this to add to history</Button>
            <Button variant="outline-dark" onClick={() => history.push('/Results')}>Click this button to save the interview</Button>
        </form>

      </div>
    );
  }
}