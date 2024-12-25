import React, { Component } from 'react';

class StateExample extends Component {
  constructor(props) {
    super(props);
    // Initialize state
    this.state = {
      count: 0
    };
  }

  // Define a method to update state
  incrementCount = () => {
    // Use this.setState() to update state
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}

export default StateExample;