import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor() {
	  super();
	  this.state = {
	  	count: 0
	}
}
  render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input type="text" placeholder="Empieza a escribir algo" onChange={this.updateCount.bind(this)} />
        <p className="repeater">{this.state.count}</p>
      </div>
    );
  }

  updateCount(e){
  	this.setState({
  		count: e.target.value
  	});
  }
}

export default App;
