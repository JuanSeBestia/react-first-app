import React, { Component } from 'react';
import './App.css';
import MainComponent from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './service/redux/configureStore';

const store = ConfigureStore();

class App extends Component {
  constructor(props) {
    super(props);
    console.log("Hellow App Component", { state: this.state });
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <MainComponent />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
