import React, { Component } from 'react';
import Header from './components/Header';
import Car from './components/Car';
import Controlers from './components/Controlers';
import Stats from './components/Stats';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleHeating = this.handleHeating.bind(this);
  }

  state = {
    "speed": 50,
    "temperature": 20,
    "heating": "ac",
    "heatingOn": false
  }

  handleChange(stateName, number) {
    var heating = this.state.temperature <= 0 ? "heat" : "ac";
    this.setState({
      [stateName]: number,
      "heating": heating
    });
  }

  handleHeating(heating) {
    this.setState({
      "heatingOn": heating
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="wrapper">
          <Car title="Dojezd na jedno nabití" speed={this.state.speed} />
          <Stats speed={this.state.speed} temperature={this.state.temperature} heat={this.state.heating} heatOn={this.state.heatingOn} />
          <Controlers state={this.state} handleChange={this.handleChange} handleHeating={this.handleHeating} />
          <p className="warning">
            * Vzoreček pro výpočet dojezdu je pouze smyšlený! <br />
          </p>
        </div>
      </div>
    );
  }
}

export default App;
