//client/components/App.js
import React, { Component } from 'react';

// import components
import AppNavbar from './AppNavbar.js';
import Home from './Home.js';

// import css
//import '../css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <Home />
      </div>
    );
  }
}

export default App;