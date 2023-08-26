import { useEffect, useState } from "react";
import useDebounce from "./CustomHooks/useDebounce";
import Lifecycle from "./components/lifecycle";
import useCounter from "./CustomHooks/useCounter";
import { useFetch, useGetAxios } from "./CustomHooks/useFetch";
import { useThrottle } from "./CustomHooks/useThrottle";
import "./App.css";
const countries = [
  { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },
  { name: "Pak", value: "PK", cities: ["Lahore", "Karachi"] },
  { name: "Bangladesh", value: "BG", cities: ["Dhaka", "Chittagong"] },
];

export default function App() {
  // state to store the value of the country
  const [country, setCountry] = useState([]);
  // useEffect(() => {
  //   console.log(country[0]);
  //   console.log(country[1]);
  // }, [country]);

  /*   console.log(country);
  console.log(countries[1]); */

  /* debounce */
  function handleOnChange(e) {
    console.log("Fetching data...", e.target.value);
  }
  const betterFunction = useDebounce(handleOnChange, 1000);

  /* useCounter */
  const [value, increment, directDecrement, functionalDecrement, reset] =
    useCounter(0);

  /*  useFetch and useGetAxios*/
  const [dataFromFetch] = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );
  const [dataFromAxios] = useGetAxios(
    "https://jsonplaceholder.typicode.com/todos"
  );
  console.log(dataFromFetch);
  console.log(dataFromAxios);

  ///////inplace of transformedData we can use dataFromFetch directly also
  const transformedData = dataFromFetch?.slice(0, 4).map((item) => ({
    ...item,
    title: item.title.toUpperCase(),
  }));

  /* useThrottle */
  /* 
  const normalFunc = () => {
    console.count("Normal Function");
  };
  window.addEventListener("resize", normalFunc); 
  */

  function loggerFunc() {
    console.log("Hi i am logger func");
  }
  const betterFuncThrott = useThrottle(loggerFunc, 3000);
  window.addEventListener("resize", betterFuncThrott);
  return (
    <div className="App">
      {/* debounce */}
      <input onKeyUp={betterFunction} type="text"></input>

      {/* useCounter hook */}
      <div style={{ display: "flex", flexDirection: "row" }}>
        <input type="number" value={value}></input>
        <button onClick={increment}>+</button>
        <button onClick={directDecrement}>Direct -</button>
        <button onClick={functionalDecrement}>Functional -</button>
        <button onClick={reset}>R</button>
      </div>

      {/* useFetch and useGetAxios  - in place of null you can write function*/}
      <pre>{JSON.stringify(dataFromAxios?.slice(0, 1), null, 2)}</pre>
      <pre>
        {JSON.stringify(
          transformedData,
          (key, value) => {
            if (key === "completed") {
              return value ? "Completed By CV" : "Not Completed by CS";
            }
            return value;
          },
          2
        )}
      </pre>

      {/* lifecycle methods */}
      <Lifecycle />

      {/* useDebouncing */}
      <div>Debounce</div>
      <input type="text"></input>

      {/* 1st DropDown */}
      <select
        // value={country}
        onChange={(e) => {
          //store index
          setCountry([e.target.value]);
        }}
      >
        {countries.map((item, index) => {
          return (
            <option key={index} value={index}>
              {item.name}
            </option>
          );
        })}
      </select>
      {/* 2nd DropDown */}
      <select>
        {countries[country] &&
          countries[country].cities.map((item, index) => {
            return (
              <option key={index} value={index}>
                {item}
              </option>
            );
          })}
      </select>
    </div>
  );
}
