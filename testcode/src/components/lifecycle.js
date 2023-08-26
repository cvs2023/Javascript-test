import React, { Component } from "react";
//https://programmingwithmosh.com/javascript/react-lifecycle-methods/

//render is only req in class
//const , render sequence
//const , getderivedstatefromProps , render , componentDidMount , componentWillUnmount ,componentDidMount

/* shouldUpdate
on update if shouldUpdate is false --> getderivedstatefromProps , shouldComponentUpdate ( render nhi hoga)
on update if shouldUpdate is true --> getderivedstatefromProps,shouldComponentUpdate ,render,componentDidUpdate
 */

/* render k baad component did update hota hai */
/* You can modify the component state within the componentDidUpdate(), but use it with caution/condition to check prev = new  */
/* You cannot modify the component state in componentWillUnmount lifecycle. */
class MyComponent extends Component {
  constructor(props) {
    console.log("Constructor first");
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
  /*  It's a suitable place for side effects after a render, such as interacting with external APIs or performing DOM manipulations. */
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }
  /* This method is called right before a component is removed from the DOM. It's useful for cleanup tasks, such as removing event listeners or cancelling asynchronous operations. */
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

/* In JavaScript, particularly in the context of web development and frameworks like React, the term "lifecycle" often refers to the sequence of events that occur during the creation, updating, and destruction of a component or object. This concept is crucial for managing the behavior and interactions of components throughout their existence. Here's a brief overview of the lifecycle stages and their uses:

1. Component/Object Creation:

Constructor: This is where initial setup and state initialization typically occur. It's the appropriate place for one-time setup tasks.
2. Component/Object Updating:

render: This method returns the JSX or UI representation of the component. It's called whenever the component needs to be re-rendered, typically due to changes in state or props.

componentDidUpdate (or equivalent): This method is called after the component's updates have been flushed to the DOM. It's a suitable place for side effects after a render, such as interacting with external APIs or performing DOM manipulations.

shouldComponentUpdate (or equivalent): This method lets you control whether a component should re-render when its state or props change. It's used to optimize rendering performance by preventing unnecessary re-renders.

3. Component/Object Destruction:

componentWillUnmount (or equivalent): This method is called right before a component is removed from the DOM. It's useful for cleanup tasks, such as removing event listeners or cancelling asynchronous operations.
Use Cases:

State Management: Lifecycle methods allow you to set up and manage state, ensuring that components update correctly when state changes.

Side Effects: Lifecycle methods are used to manage side effects, such as fetching data from an API, interacting with external resources, or updating the DOM.

Optimizing Performance: By controlling when components update using lifecycle methods like shouldComponentUpdate, you can prevent unnecessary rendering and optimize performance.

Cleanup: Lifecycle methods like componentWillUnmount are essential for cleaning up resources, like event listeners or timers, to avoid memory leaks when components are removed.

Conditional Logic: Lifecycle methods can involve conditional logic to handle specific situations or events, enhancing the behavior of your components.

It's important to note that with the introduction of React Hooks, the traditional lifecycle methods have evolved. For instance, useEffect is a common hook used for managing side effects and lifecycle behavior in functional components.

Understanding these lifecycle stages and their uses is crucial for building reliable and efficient components in JavaScript frameworks and librarie */
