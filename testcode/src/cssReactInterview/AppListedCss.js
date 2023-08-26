import "./styles.css";
import { useState } from "react";
export default function App() {
  const [value, setValue] = useState(3);
  const renderShapes = () => {
    const shapes = [];
    const shapeOrder = ["circle", "square"];

    for (let i = 0; i < value; i++) {
      const rowShapes = [];
      const startIndex = i % 2; //next line mai shape knsi hogi first yeh btaegi

      for (let j = 0; j < value; j++) {
        const shapeType = shapeOrder[(startIndex + j) % 2]; //yeh alternate k liye
        rowShapes.push(<div className={shapeType}></div>);
      }
      shapes.push(<div className="box-flex">{rowShapes}</div>);
    }
    return shapes;
  };
  return (
    <div className="App">
      <div>
        <div className="">{value && renderShapes()}</div>
      </div>
    </div>
  );
}
