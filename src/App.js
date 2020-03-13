import React from 'react';
import logo from './logo.svg';
import './App.css';
//import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Map from './components/map'

function App() {
  return (
    <div className="App">
      <Map></Map>
      <Router>
      <Route exact path="/" component={Home} />
      </Router>
    </div>
  );
}

export default App;
