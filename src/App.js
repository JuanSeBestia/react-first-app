import React, { Component } from 'react';

import './App.css';


import { DISHES } from './shared/dishes'

import Navigation from './components/navigation/Navigations';
import Menu from './components/menu/MenuComponent';
import Tasks from './components/task/Tasks';


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
        <Navigation notification={this.state.dishes.length} title={this.state.title}></Navigation>

        <Menu dishes={this.state.dishes} />

      </div>
    );
  }
}

export default App;
