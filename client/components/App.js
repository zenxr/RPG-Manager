//client/components/App.js
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

// import components
import Routes from './Routes';


// redux imports
import { Provider } from "react-redux";
import store from "../redux/store/index";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Routes />
          </div>
        </BrowserRouter>
    </Provider>
    );
  }
}

export default App;
