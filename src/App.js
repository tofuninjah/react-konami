import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import Konami from './components/Konami';

class App extends Component {

  constructor() {
    super();
    this.state = {
      activated: false,
      name: ''
    }

    this.toggleActivation = this.toggleActivation.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggleActivation() {
    if(this.state.activated === true) {
      this.setState({activated: false});
    } else {
      this.setState({activated: true});
    }
  }

  handleChange(e) {
    console.log(e.target.value);
    this.setState({name: e.target.value})
  }

  render() {
    return (
        <div className="App">
          <header className="App-header">

            <img src={logo} className="App-logo" alt="logo" />

            <input type="text" onChange={this.handleChange} placeholder="Your name"/>

            <button onClick={this.toggleActivation}>Toggle Konami Code!</button>

            {this.state.activated ? <Konami name={this.state.name}/> : <div>Konami Code: Deactivated</div>}

          </header>
        </div>
      );
    }
  }

export default App;
