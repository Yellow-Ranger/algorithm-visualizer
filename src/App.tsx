import React, { useEffect, useRef, useState } from "react";
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

  const refContainer = useRef<HTMLDivElement | null>(null);
  const [dimensions, setDimensions] = useState<{
    width: number;
    height: number;
  }>({ width: 0, height: 0 });
  useEffect(() => {
    if (refContainer.current) {
      setDimensions({
        width: refContainer.current.offsetWidth,
        height: refContainer.current.offsetHeight,
      });
    }
  }, []);

  return (
    <div className="App">
      <header className="header">
        Sorting Visualizer
        <div id="headerTag">by Gideon Moyo</div>
      </header>
      <ControlBar controls={controls} setControls={setControls} />
      <div className="main-container" ref={refContainer}>
        <div className="visualizer-container">
        <AlgorithmVisualizer
          controls={controls}
          setControls={setControls}
          dimensions={dimensions}
          />
          </div>
      </div>
    </div>
  );
}

export default App;
