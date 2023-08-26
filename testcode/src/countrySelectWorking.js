import { useState, useEffect } from "react";
import "./App.css";

const countries = [
  { name: "India", value: "IN", cities: ["Delhi", "Jammu"] },
  { name: "England", value: "UK", cities: ["London", "Leeds"] },
  { name: "USA", value: "USA", cities: ["Newyork", "LA"] },
];
export function App() {
  const [country, setCountry] = useState("");
  return (
    <div className="App">
      <select
        // value={country} jo pehle dikhegi if you want to fix may be
        onChange={(e) => {
          //options se value ayegi name wali
          console.log(e.target.value);
          setCountry(e.target.value);
        }}
      >
        {countries.map((items, index) => {
          return (
            //option ki value he upr select k e mai jaati hai  value={items.name}
            <option key={items.name} value={items.name}>
              {items.name}
            </option>
          );
        })}
      </select>

      {country && (
        <select>
          {countries
            .find((item) => country === item.name)
            .cities.map((j) => {
              return (
                <option key={j} value={j}>
                  {j}
                </option>
              );
            })}
        </select>
      )}
    </div>
  );
}

export default App;
