import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: 'Lucas Onazes'
    };
  }

  render() {
    const { name } = this.state;

    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {name}
        </p>
      </header>
    </div>
    );
  }
}

export default App;
