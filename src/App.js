import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Weather from './components/weather';
import Cars from './containers/cars';
import WeatherApp from './containers/weather-app';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>My Weather App React-Redux</h1>
        </header>
        <WeatherApp/>
        <Cars/>
      </div>
    );
  }
}

export default App;
