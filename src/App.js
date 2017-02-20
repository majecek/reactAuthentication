import React, { Component } from "react";
import "./App.css";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Router, browserHistory } from "react-router";
import routes from "./routes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <Router history={browserHistory} routes={routes}/>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
