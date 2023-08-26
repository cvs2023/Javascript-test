import React, { Component } from "react";

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    return true;
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  handleClick() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    console.log("render");
    return (
      <div>
        <h1>My Component</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Increment Count</button>
      </div>
    );
  }
}

export default MyComponent;
