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
  }
  render() {
    return (
      <div className="App">
        <Recorder
          record={true}
          title={"New recording"}
          audioURL={this.state.audioDetails.url}
          showUIAudio
          handleAudioStop={(audioURL) => this.handleAudioStop(audioURL)}
        />
        <form>
             <Button variant="btn btn-success" onClick={() => Results.buttonHandler(["msg1", "msg2", "msg3"])}>Click this to add to history</Button>
            <Button variant="btn btn-success" onClick={() => history.push('/Results')}>Click this button to end the interview</Button>
        </form>

      </div>
    );
  }
}