import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import AlgorithmVisualizer from "./components/AlgorithmVisualizer";
import ControlBar from "./components/ControlBar";
import useAlgorithm from "./hooks/useAlgorithm";
import { ControlState } from "./types/controlState";
import { NumberWithId } from "./types/numberWithId";
import { StepState } from "./types/stepState";

function App() {
  const [controls, setControls] = useState<ControlState>({
    algorithm: ["", ""],
    valueRange: [0, 0],
    items: 50,
    sortSpeed: 50,
    visualize: false,
    compare: false,
    reset: 0,
  });
  const [randomArray, setRandomArray] = useState<NumberWithId[]>([]);
  const refContainer = useRef<HTMLDivElement | null>(null);
  const [dimensions, setDimensions] = useState<{
    width: number;
    height: number;
  }>({ width: 0, height: 0 });
  const [nextStep, setNextStep] = useState<StepState>({
    comparedIndexes: [0, 1],
    newArray: [],
    ordered: false,
  });

  useAlgorithm(randomArray, setRandomArray, nextStep, setNextStep, {
    algorithm: controls.algorithm.slice(0, 1),
    valueRange: controls.valueRange,
    items: controls.items,
    sortSpeed: controls.sortSpeed,
    visualize: controls.visualize,
    compare: controls.compare,
    reset: controls.reset,
  });

  useEffect(() => {
    if (refContainer.current) {
      setDimensions({
        width: refContainer.current.offsetWidth,
        height: refContainer.current.offsetHeight,
      });
    }
  }, []);

  useEffect(() => {
    if (nextStep.ordered) {
      setControls({ ...controls, visualize: false });
      // console.log(nextStep.newArray);
    }
  }, [nextStep]);

  // useEffect(() => {
  //   console.log("Next Step: ", nextStep);
  // }, [nextStep]);

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
            randomArray={randomArray}
            setRandomArray={setRandomArray}
            stepState={nextStep}
            setStepState={setNextStep}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
