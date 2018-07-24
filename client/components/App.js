//client/components/App.js
import React, { Component } from 'react';

// import components
import AppNavbar from './AppNavbar.js';

// import css
//import '../css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
      </div>
    );
  }
}

export default App;