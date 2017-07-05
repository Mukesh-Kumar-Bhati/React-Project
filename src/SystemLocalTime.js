import React, { Component } from 'react';

import './App.css';

class Clock extends React.Component {
 constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
 componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }



  render() {
    return (
      <div>
        
        <h2>   {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

//setInterval( element, 1000);

 export default Clock;