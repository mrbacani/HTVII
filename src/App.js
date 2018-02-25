import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      show: false
      };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    console.log("change")
  }

  handleClick () {
    console.log('Click')
    var url = "http://www.sentiment140.com/api/classify?text=happy";
    axios.get(url)
    .then(response => console.log(response))
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Our App</h1>
        </header>
        <h2>Enter sentiment check phrase : </h2>
        <label>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <div className='button__container'>
          <button className='button' onClick={this.handleClick}>
            Click Me
          </button>
        </div>
      <h2>Value = {this.state.value} </h2>
      </div>
    );
  }
}

export default App;
