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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    console.log("change")
  }



  handleSubmit(event) {
    console.log("submit")
    // var url = "http://www.sentiment140.com/api/classify?text={this.state.value}";
    // axios.get(url)
    // .then(response => this.setState({value: response}))
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Our App</h1>
        </header>
        <form onSubmit={this.handleSubmit}>
        <h2>Enter sentiment check phrase : </h2>
        <label>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <h2>Value = {this.state.value} </h2>
      </div>
    );
  }
}

export default App;
