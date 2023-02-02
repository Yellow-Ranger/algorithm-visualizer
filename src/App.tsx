import React from "react";
import "./App.css";
import ControlBar from "./components/ControlBar";

function App() {
  return (
    <div className="App">
      <header className="header">
        Sorting Visualizer
        <div id="headerTag">by Gideon Moyo</div>
      </header>
      <ControlBar />
      <div className="main-container">Main Container</div>
    </div>
  );
}

export default App;
