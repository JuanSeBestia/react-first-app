import React, { Component } from 'react';

import './App.css';


import { DISHES } from './shared/dishes'

import MainComponent from './components/MainComponent';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "JuanSe Excersises",
      dishes: DISHES,
    };
    console.log("Hellow App Component", { state: this.state });
    
  }

  render() {
    return (
      <div className="App">
        <MainComponent dishes={this.state.dishes} />
      </div>
    );
  }
}

export default App;
