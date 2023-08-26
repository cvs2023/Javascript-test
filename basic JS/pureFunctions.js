/* Pure Function----------------------------:

A pure function is a function that always produces the same output for the same input and has no side effects. --------------It doesn't modify any external state or variables and is deterministic.------------- */

// Pure function example ( same output for same input )
function add(a, b) {
  return a + b;
}

const result = add(2, 3); // Output: 5

/*  It doesn't rely on any external state or variables,  */
function addToTotal(value) {
  return value + 2;
}

const r1 = addToTotal(5); // Output: 5
const r2 = addToTotal(3); // Output: 8

/* Impure Function----------------------------:

An impure function is a function that can produce different outputs for the same input and/or has side effects, such as modifying global variables, making API calls, or altering the DOM. */

/* In this example, the addToTotal function is impure because 
.-------------it modifies the external total variable.-------------, which can lead to different outputs for the same input. */
let total = 0;

function addToTotal(value) {
  total += value;
  return total;
}

const result1 = addToTotal(5); // Output: 5
const result2 = addToTotal(3); // Output: 8

/* IN REACT Pure Component:

A pure component is a component 
- that only relies on its props and 
- has no internal state changes. 
- It renders the same output for the same props and 
- doesn't have side effects.


*/
// Pure component example
function Greeting(props) {
  return <div>Hello, {props.name}!</div>;
}

/* 
Impure Component:

An impure component is a component that can 
- can change its internal state, 
- interact with external state, or 
- have side effects like making API calls.
*/

// Impure component example
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        Count: {this.state.count}
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
