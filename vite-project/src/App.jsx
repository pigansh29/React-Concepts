import React from "react";
import WeatherCard from "./Components/WeatherCard.jsx";
// import BulbToggle from './Components/BulbToggle'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Calculator from "./Components/Calculator.jsx";
import StopWatch from "./Components/StopWatch.jsx";

const App = () => {
  return (
    <Router>
      
       <div>
        <nav>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<WeatherCard />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/stopwatch" element={<StopWatch />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
