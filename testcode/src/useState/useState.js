import { useState, useEffect } from "react";
import "./App.css";
function A() {
  console.log("render A");
  return null;
}
const App = () => {
  const [_state, setState] = useState(false);
  console.log("render App");
  console.log({ _state });
  return (
    <div>
      <button
        onClick={() => {
          console.log("click");
          setState(true);
        }}
      >
        click 1
      </button>
      <A />
    </div>
  );
};

// const App = () => {
//   const [val, setVal] = useState(false);
//   console.log("render App");
//   useEffect(() => {
//     setVal((val) => val + 1);
//   }, []);
//   console.log({ val });
//   return (
//     <div className="App">
//       <h1>{val}</h1>
//       <button
//         onClick={() => {
//           setVal((val) => val + 1);
//         }}
//       >
//         Update
//       </button>
//       <button
//         onClick={() => {
//           setVal((val) => val);
//         }}
//       >
//         Update with same value
//       </button>
//       <A />
//     </div>
//   );
// };
