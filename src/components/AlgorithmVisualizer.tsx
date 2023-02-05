import React, { useEffect } from "react";
import { ControlState } from "../types/controlState";

function AlgorithmVisualizer({
  controls,
  setControls,
}: {
  controls: ControlState;
  setControls: React.Dispatch<React.SetStateAction<ControlState>>;
}) {
  const { algorithm, valueRange, items, sortSpeed, visualize, compare, reset } =
    controls;

  useEffect(() => {
    const resetScreen = () => {
      setTimeout(() => {
        setControls({ ...controls, reset: false });
      }, 1000);
    };
    console.log("reset triggered");
    resetScreen();
  }, [reset]);

  return (
    <div>
      <p>Algorithm: {compare ? algorithm : algorithm[0]}</p>
      <p>Value Range: {valueRange}</p>
      <p>Items: {items}</p>
      <p>Sort Speed: {sortSpeed}</p>
      <p>Visualize: {visualize ? "true" : "false"}</p>
      <p>Compare: {compare ? "true" : "false"}</p>
      <p>Reset: {reset ? "true" : "false"}</p>
    </div>
  );
}

export default AlgorithmVisualizer;
