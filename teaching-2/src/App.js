import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Upload from './Upload'

class App extends Component {
  render() {
    return (
      <div>
	<MuiThemeProvider>
          <AppBar title="Melonoma Classifier" showMenuIconButton={false}/>
	  <Upload />
	</MuiThemeProvider>
      </div>
    );
  }
}

export default App;
