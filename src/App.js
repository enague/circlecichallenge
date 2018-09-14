import React, { Component } from 'react';
import './App.css'


class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      words: ['Return', 'a', 'new', 'word'],
      word: 'Hello World!'
    }
  }

  getRandomIndex(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  
  getText() {
    let word = this.state.words[this.getRandomIndex(4)]
    this.setState({
      word: word
    })
  }

  render() {
    return (
      <div className="App">
        <div className='text' style={{fontSize: '30px', color: '#e88d0d'}}>{this.state.word}</div> <br />
        <button style={{width: '50%', borderRadius: '12px', background: 'black', color: 'white', fontSize: '20px'}} onClick={()=> {this.getText()}}> Get New Text</button>
      </div>
    );
  }
}

export default App;
