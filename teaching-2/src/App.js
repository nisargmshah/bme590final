import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Upload from './Upload'
//import Flask from '/anaconda/lib/python3.6/site-packages/';
//app = Flask(__name__)

class App extends Component {
  render() {
    return (
      <div>
	     <MuiThemeProvider>
	        <div>
                <AppBar title="BME590: Melonoma Classifier" showMenuIconButton={false} titleStyle={{textAlign: "center"}}/>
	            <Upload />
	        </div>
	     </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
