import React, { Component } from 'react';
import './App.css';
import { DISHES } from './shared/dishes'
import MainComponent from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom'

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
      <BrowserRouter>
        <div className="App">
          <MainComponent dishes={this.state.dishes} />
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
