import React from 'react';
import axios from "axios";
import { Button } from 'react-bootstrap';
import history from './../history';
import "./Interview.css";
import Results from '../Results/Results'
import { useSpeechSynthesis } from 'react-speech-kit';

function Speech(Component) {
  return function WrappedComponent(props) {
    const {speak} = useSpeechSynthesis();
    return <Component {...props} myHookValue={speak} />;
  }
}
class VoiceRecorder extends React.Component {
  constructor(props) {
    super(props);
    this.historyStorage = ['Hi, my name is Adam Smith. I am currently a representative of Microsoft. To start off this interview, can you tell me a little bit about yourself?'];
    this.mediaRecorder = null;
    this.audioChunks = [];

    this.recognition = new window.webkitSpeechRecognition();
    this.recognition.continuous = true;
    this.recognition.interimResults = true;
    this.recognition.lang = 'en-US';

    this.state = {
      recording: false,
      transcript: '',
      blob: null,
      duration: 0,
      response: 'Hi, my name is Adam Smith. I am currently a representative of Microsoft. To start off this interview, can you tell me a little bit about yourself?'
    };
    this.handleResult = this.handleResult.bind(this);
    this.handleDataAvailable = this.handleDataAvailable.bind(this);
    this.startRecording = this.startRecording.bind(this);
    this.stopRecording = this.stopRecording.bind(this);

  }

  handleResult(event) {
    const transcript = Array.from(event.results)
      .map(result => result[0].transcript)
      .join('');

    this.setState({ transcript });
  }

  handleDataAvailable(event) {
    if (event.data.size > 0) {
      this.audioChunks.push(event.data);
    }
  }

  startRecording() {
    this.recognition.start();
    this.recognition.addEventListener('result', this.handleResult);

    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        this.mediaRecorder = new MediaRecorder(stream);
        this.mediaRecorder.addEventListener('dataavailable', this.handleDataAvailable);
        this.mediaRecorder.start();
      });

    this.setState({ recording: true });
  }

  stopRecording() {
    this.recognition.stop();
    this.recognition.removeEventListener('result', this.handleResult);

    this.mediaRecorder.stop();
    const blob = new Blob(this.audioChunks, { type: 'audio/mp3' });

    this.setState({
      recording: false,
      blob,
      duration: Math.floor(this.mediaRecorder.duration / 1000)
    });

    this.audioChunks = [];
    this.historyStorage.push(this.state.transcript);
    axios({
      method: 'post',
      url: '/audio',
      params: {
        'words': this.state.transcript
      }
    }).then((response) => {
      const res = response.data
      console.log(res)
      this.historyStorage.push(res);
      const index = res.indexOf("Score");
      if (index !== -1) {
        this.state.response = res.substring(0,index);
      } else {
        this.state.response = res
      }

      this.forceUpdate()

      this.props.myHookValue({ text: this.state.response });

    }).catch((error) => {
      if(error.response) {
        console.log(error.response)
      }
    })

  }
    componentDidMount() {
    this.props.myHookValue({ text: "sample" })
    }
  render() {
    return (
      
      <div className = "top">
        <p>{this.state.response}</p>
        <div>
          <Button className="bt" variant="outline-dark" onClick={this.startRecording} disabled={this.state.recording}>Start</Button>
          <Button className="bt" variant="outline-dark" onClick={this.stopRecording} disabled={!this.state.recording}>Stop</Button>
        </div>
        <Button className="bt" variant="outline-dark" onClick={() => this.endHandler(this.historyStorage)}>End and Save Interview</Button>
        <p>{this.state.transcript}</p>
      </div>
    );
  }
  endHandler(convo) {
    Results.buttonHandler(convo);
    history.push('/Results');
  }
}

export default Speech(VoiceRecorder);