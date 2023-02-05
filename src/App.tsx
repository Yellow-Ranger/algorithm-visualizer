import React, { useEffect, useState } from "react";
import "./App.css";
import AlgorithmVisualizer from "./components/AlgorithmVisualizer";
import ControlBar from "./components/ControlBar";
import { ControlState } from "./types/controlState";

function App() {
  const [controls, setControls] = useState<ControlState>({
    algorithm: ["", ""],
    valueRange: [0, 0],
    items: 50,
    sortSpeed: 50,
    visualize: false,
    compare: false,
    reset: false,
  });

  return (
    <div className="App">
      <header className="header">
        Sorting Visualizer
        <div id="headerTag">by Gideon Moyo</div>
      </header>
      <ControlBar
        controls={controls}
        setControls={setControls}
      />
      <div className="main-container">
        <AlgorithmVisualizer controls={controls} setControls={setControls}/>
      </div>
    </div>
  );
}

export default App;
