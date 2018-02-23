import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { orange500, blue500 } from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import { getCalc } from '../api/calculateApi';
import logo from './logo.svg';
import './App.css';

const styles = {
  buttons: {
    margin: 12,
    width: 100,
    height: 30,
    minWidth: 100,
  },

  paper: {

    margin: '0 auto',

    textAlign: 'left',
    display: 'inline-block',
    padding: 10,
  },
  buttonStyle: {
    width: 100,
    minWidth: 100,
    height: 30
  },
  lableStyle: {
    float: 'center',
    fontSize: 12,
  },
  underlineStyle: {
    borderColor: orange500,
  },
  textfields: {
    width: 100,
    margin: 12,
  }
};

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        sNumber: "",
        fNumber: "",
        whatisResult: "",
        iswhatResult: "",
        incDecResult: ""
      }
    this.calculate = this.calculate.bind(this);
    this.calculateIsWhat = this.calculateIsWhat.bind(this);
    this.getTotal = this.getTotal.bind(this);
    this.calculateIncDec = this.calculateIncDec.bind(this);
  }

  async getTotal(data, calcType) {
    try {
      let response = await getCalc(data, calcType);
      var resaltType = calcType + "Result";
      this.setState({
        [resaltType]: response.total
      })
    } catch (err) {
      console.error(err);
    }
  }

  calculateIsWhat = (event) => {
    var data = [];
    var calcType = this.refs.iswhat.props.name;
    data.push(this.refs.iswhatFirstNumber.getValue());
    data.push(this.refs.iswhatSecondNumber.getValue());
    this.getTotal(data, calcType);
  }

  calculateIncDec = (event) => {
    var data = [];
    var calcType = this.refs.incDec.props.name;
    data.push(this.refs.incDecFirstNumber.getValue());
    data.push(this.refs.incDecSecondNumber.getValue());
    this.getTotal(data, calcType);
  }

  calculate = (event) => {
    var data = [];
    var calcType = this.refs.whatis.props.name;
    data.push(this.refs.whatisFirstNumber.getValue());
    data.push(this.refs.whatisSecondNumber.getValue());

    this.getTotal(data, calcType);
  };

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Paper zDepth={2} style={styles.paper}>
            <AppBar
              title="Percentage Calculator"
              iconClassNameRight="muidocs-icon-navigation-expand-more"
            />

            <p className="App-intro">
              Percenage Calculator is a free online tool to calculate percentages
            </p>

            <div id="calculator">
              <div className="whatis" id="whatis">
                <TextField
                  ref="whatisFirstNumber"
                  name="fNumber"
                  hintText="Percentage"
                  floatingLabelText="What is"
                  style={styles.textfields}
                />
                % of
              <TextField
                  ref="whatisSecondNumber"
                  hintText="Number"
                  style={styles.textfields}
                />
                <RaisedButton
                  ref="whatis"
                  name="whatis"
                  label="Calculate"
                  labelStyle={styles.lableStyle}
                  primary={true}
                  buttonStyle={styles.buttonsStyle}
                  style={styles.buttons}
                  className="calculate"
                  type="Submit"
                  id='whatis'
                  onClick={this.calculate.bind(this)}
                />
                <TextField
                  ref="whatisResult"
                  value={this.state.whatisResult}
                  style={styles.textfields}
                  floatingLabelText="result"
                  disabled={true}
                />
              </div>

              <div className="iswhat" id="iswhat">
                <TextField
                  ref="iswhatFirstNumber"
                  hintText="Number"
                  style={styles.textfields}
                />
                is what Percenage of
              <TextField
                  ref="iswhatSecondNumber"
                  hintText="Number"
                  style={styles.textfields}
                />
                <RaisedButton
                  ref="iswhat"
                  name="iswhat"
                  label="Calculate"
                  labelStyle={styles.lableStyle}
                  primary={true}
                  buttonStyle={styles.buttonsStyle}
                  style={styles.buttons}
                  className="calculate"
                  type="Submit"
                  id='iswhat'
                  onClick={this.calculateIsWhat.bind(this)}
                />
                <TextField
                  ref="iswhatResult"
                  value={this.state.iswhatResult}
                  style={styles.textfields}
                  floatingLabelText="result"
                  disabled={true}
                />
              </div>

              <div className="incDec" id="incDec">
                <p>What is the percentage increase/decrease</p>
                from
              <TextField
                  ref='incDecFirstNumber'
                  hintText="Number"
                  style={styles.textfields}
                />
                to
              <TextField
                  ref='incDecSecondNumber'
                  hintText="Number"
                  style={styles.textfields}
                />
                <RaisedButton
                  ref="incDec"
                  name="incDec"
                  label="Calculate"
                  labelStyle={styles.lableStyle}
                  primary={true}
                  buttonStyle={styles.buttonsStyle}
                  style={styles.buttons}
                  className="calculate"
                  type="Submit"
                  id='incDec'
                  onClick={this.calculateIncDec.bind(this)}
                />
                <TextField
                  ref="incDecResult"
                  value={this.state.incDecResult}
                  style={styles.textfields}
                  floatingLabelText="result"
                  disabled={true}
                />
              </div>
            </div>
          </Paper>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
