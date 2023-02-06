import React, { useEffect, useRef, useState } from "react";
import { ControlState } from "../types/controlState";
import { NumberWithId } from "../types/numberWithId";
import { StepState } from "../types/stepState";
import DrawArray from "./DrawArray";

function AlgorithmVisualizer({
  controls,
  setControls,
  dimensions,
  randomArray,
  setRandomArray,
  stepState,
  setStepState
}: {
  controls: ControlState;
  setControls: React.Dispatch<React.SetStateAction<ControlState>>;
  dimensions: {
    width: number;
    height: number;
  },
  randomArray: NumberWithId[],
  setRandomArray: React.Dispatch<React.SetStateAction<NumberWithId[]>>;
  stepState: StepState;
  setStepState: React.Dispatch<React.SetStateAction<StepState>>;
}) {
  const { algorithm, valueRange, items, sortSpeed, visualize, compare, reset } =
    controls;
  const { width, height } = dimensions;
  const [topPosition, setTopPosition] = useState<number[]>([0, height / 20]);

  return (
    <>
      <div className="draw-array">
        <DrawArray
          controls={controls}
          height={height}
          width={width}
          topPosition={topPosition[0]}
          randomArray={randomArray}
          setRandomArray={setRandomArray}
          stepState={stepState}
          setStepState={setStepState}
          />
      </div>
      {compare ? (
        <div className="draw-array">
          <DrawArray
            controls={controls}
            height={height}
            width={width}
            topPosition={topPosition[1]}
            randomArray={randomArray}
            setRandomArray={setRandomArray}
            stepState={stepState}
            setStepState={setStepState}
            />
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default AlgorithmVisualizer;
