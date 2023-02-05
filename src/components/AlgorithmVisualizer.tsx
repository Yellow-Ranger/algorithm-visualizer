import React, { useEffect, useRef, useState } from "react";
import { ControlState } from "../types/controlState";
import DrawArray from "./DrawArray";

function AlgorithmVisualizer({
  controls,
  setControls,
  dimensions,
}: {
  controls: ControlState;
  setControls: React.Dispatch<React.SetStateAction<ControlState>>;
  dimensions: {
    width: number;
    height: number;
  };
}) {
  const { algorithm, valueRange, items, sortSpeed, visualize, compare, reset } =
    controls;
  const { width, height } = dimensions;
  const [topPosition, setTopPosition] = useState<number[]>([0, height / 20]);

  useEffect(() => {
    console.log("height: ", height);
    const resetScreen = () => {
      setTimeout(() => {
        setControls({ ...controls, reset: false });
      }, 1000);
    };
    resetScreen();
  }, [reset]);

  return (
    <>
      <div className="draw-array">
        <DrawArray
          controls={controls}
          height={height}
          width={width}
          topPosition={topPosition[0]}
        />
      </div>
      {compare ? (
        <div className="draw-array">
          <DrawArray
            controls={controls}
            height={height}
            width={width}
            topPosition={topPosition[1]}
          />
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default AlgorithmVisualizer;
