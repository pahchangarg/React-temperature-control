import { Component } from "react";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [temperatureValue, setTemperatureValue] = useState(10);
  const [temColor, setTempColor] = useState("cold");

  const incTemp = () => {
    setTemperatureValue(temperatureValue + 1);
    const newTemp = temperatureValue + 1;
    if (newTemp > 25) {
      setTempColor("hot");
    }
  };
  const decTemp = () => {
    setTemperatureValue(temperatureValue - 1);
    const newTemp = temperatureValue - 1;
    if (newTemp <= 25) {
      setTempColor("cold");
    }
  };
  return (
    <div className="App">
      <div className={`circle ${temColor}`}>
        <h2>{temperatureValue}°C</h2>
      </div>
      <div className="buttons">
        <button onClick={incTemp} className="counter">
          +
        </button>
        <button onClick={decTemp} className="counter">
          -
        </button>
      </div>
    </div>
  );
};

export default App;
