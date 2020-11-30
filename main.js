// Initialise inputKey var
let inputKey;
// Initialise keyDisp var
let keyDisp = "";
// playAudio functions linked to each button, it plays the audio file based on the button clicked
const playAudioQ = () => {
  keyDisp = "Q";
  inputKey = document.getElementById(keyDisp);
  return inputKey.play();
}
const playAudioW = () => {
  keyDisp = "W";
  inputKey = document.getElementById(keyDisp);
  return inputKey.play();
}
const playAudioE = () => {
  keyDisp = "E";
  inputKey = document.getElementById(keyDisp);
  return inputKey.play();
}
const playAudioA = () => {
  keyDisp = "A";
  inputKey = document.getElementById(keyDisp);
  return inputKey.play();
}
const playAudioS = () => {
  keyDisp = "S";
  inputKey = document.getElementById(keyDisp);
  return inputKey.play();
}
const playAudioD = () => {
  keyDisp = "D";
  inputKey = document.getElementById(keyDisp);
  return inputKey.play();
}
const playAudioZ = () => {
  keyDisp = "Z";
  inputKey = document.getElementById(keyDisp);
  return inputKey.play();
}
const playAudioX = () => {
  keyDisp = "X";
  inputKey = document.getElementById(keyDisp);
  return inputKey.play();
}
const playAudioC = () => {
  keyDisp = "C";
  inputKey = document.getElementById(keyDisp);
  return inputKey.play();
}

//React component
class MyReactComponent extends React.Component {
  constructor(props) {
    super(props);
    //Load initial state
    this.state = {
      key: ""
    };
    this.handleDisplay = this.handleDisplay.bind(this);
    this.handleClickQ = this.handleClickQ.bind(this);
    this.handleClickW = this.handleClickW.bind(this);
    this.handleClickE = this.handleClickE.bind(this);
    this.handleClickA = this.handleClickA.bind(this);
    this.handleClickS = this.handleClickS.bind(this);
    this.handleClickD = this.handleClickD.bind(this);
    this.handleClickZ = this.handleClickZ.bind(this);
    this.handleClickX = this.handleClickX.bind(this);
    this.handleClickC = this.handleClickC.bind(this);
  }
  handleDisplay(e){
    // Get the Unicode value
    let pressedKey = e.keyCode;
    // Convert the value into a character
    keyDisp = String.fromCharCode(pressedKey);
    // Set current state to string value of the key pressed
    this.setState({
      key: keyDisp
    });
    // Play audio depending on the key pressed
    if (keyDisp === "Q") {
      return playAudioQ();
    } else if (keyDisp === "W") {
      return playAudioW();
    } else if (keyDisp === "E") {
      return playAudioE();
    } else if (keyDisp === "A") {
      return playAudioA();
    } else if (keyDisp === "S") {
      return playAudioS();
    } else if (keyDisp === "D") {
      return playAudioD();
    } else if (keyDisp === "Z") {
      return playAudioZ();
    } else if (keyDisp === "X") {
      return playAudioX();
    } else if (keyDisp === "C") {
      return playAudioC();
    }
  }
  handleClickQ(){
    playAudioQ();
    this.setState({
      key: keyDisp
    });
  }
  handleClickW(){
    playAudioW();
    this.setState({
      key: keyDisp
    });
  }
  handleClickE(){
    playAudioE();
    this.setState({
      key: keyDisp
    });
  }
  handleClickA(){
    playAudioA();
    this.setState({
      key: keyDisp
    });
  }
  handleClickS(){
    playAudioS();
    this.setState({
      key: keyDisp
    });
  }
  handleClickD(){
    playAudioD();
    this.setState({
      key: keyDisp
    });
  }
  handleClickZ(){
    playAudioZ();
    this.setState({
      key: keyDisp
    });
  }
  handleClickX(){
    playAudioX();
    this.setState({
      key: keyDisp
    });
  }
  handleClickC(){
    playAudioC();
    this.setState({
      key: keyDisp
    });
  }
  render() {
    return (
        <div id="display" className="row" onKeyDown={this.handleDisplay}>
          <div className="col-md-3">
          </div>
          <div className="col-md-6 text-center">
            <div className="customClassMain">
              <h1>Drum Machine</h1>
              <br/>
              <h3 className="customClassP">Press one of the following keys to play</h3>
              <br/>
              <div className="drum-main">
                <div className="btn-group-lg btn-group-horizontal">
                  <button id="drum-pad-Q" className="drum-pad btn btn-default btn-lg text-center" onClick={this.handleClickQ}>
                    <audio id="Q" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>
                    Q
                    </button>
                  <button id="drum-pad-W" className="drum-pad btn btn-default btn-lg" onClick={this.handleClickW}>
                    <audio id="W" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"></audio>
                    W
                  </button>
                  <button id="drum-pad-E" className="drum-pad btn btn-default btn-lg" onClick={this.handleClickE}>
                    <audio id="E" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"></audio>
                    E
                  </button>
                </div>
                <div className="btn-group-lg btn-group-horizontal">
                  <button id="drum-pad-A" className="drum-pad btn btn-default btn-lg" onClick={this.handleClickA}>
                    <audio id="A" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"></audio>
                    A
                  </button>
                  <button id="drum-pad-S" className="drum-pad btn btn-default btn-lg" onClick={this.handleClickS}>
                    <audio id="S" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>
                    S
                  </button>
                  <button id="drum-pad-D" className="drum-pad btn btn-default btn-lg" onClick={this.handleClickD}>
                    <audio id="D" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"></audio>
                    D
                  </button>
                </div>
                <div className="btn-group-lg btn-group-horizontal">
                  <button id="drum-pad-Z" className="drum-pad btn btn-default btn-lg" onClick={this.handleClickZ}>
                    <audio id="Z" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></audio>
                    Z
                  </button>
                  <button id="drum-pad-X" className="drum-pad btn btn-default btn-lg" onClick={this.handleClickX}>
                    <audio id="X" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></audio>
                    X
                  </button>
                  <button id="drum-pad-C" className="drum-pad btn btn-default btn-lg" onClick={this.handleClickC}>
                    <audio id="C" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"></audio>
                    C
                  </button>
                </div>
              </div>
              <br/>
              <p className="customClassP">Key pressed: {this.state.key}</p>
            </div>
          </div>
          <div className="col-md-3">
          </div>
        </div>
    );
  }
};
ReactDOM.render(<MyReactComponent/>, document.getElementById("drum-machine"))