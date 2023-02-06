import { red } from "@mui/material/colors";
import React, { useRef, useState, useEffect } from "react";
import { ControlState } from "../types/controlState";
import { NumberWithId } from "../types/numberWithId";
import { StepState } from "../types/stepState";

const DrawArray = ({
  controls,
  height,
  width,
  topPosition,
  randomArray,
  setRandomArray,
  stepState,
  setStepState
}: {
  controls: ControlState;
  height: number;
  width: number;
  topPosition: number;
  randomArray: NumberWithId[];
  setRandomArray: React.Dispatch<React.SetStateAction<NumberWithId[]>>;
  stepState: StepState;
  setStepState: React.Dispatch<React.SetStateAction<StepState>>;
}) => {
  const { algorithm, valueRange, items, sortSpeed, visualize, compare, reset } =
    controls;

  useEffect(() => {
    generateArray();
    setStepState({...stepState, ordered: false})
  }, [valueRange, items, reset]);

  function generateArray() {
    let temp: NumberWithId[] = [];
    for (let i = 0; i < items; i++) {
      temp.push({
        value: Math.floor(
          Math.random() * (valueRange[1] - valueRange[0]) + valueRange[0],
        ),
        id: i,
      });
    }
    setRandomArray(temp);
  }

  return (
    <div
      className="array-container"
      style={{ top: topPosition, overflowX: items > 315 ? "scroll" : "hidden" }}
    >
      {randomArray.map((value, index, array) => {
        return (
          <div
            className="array-el"
            key={index}
            style={{
              height: value.value,
              backgroundColor: stepState.ordered ? "green" : "red"
            }}
          >
            {items > 50 ? "." : value.value}
          </div>
        );
      })}
    </div>
  );
};

export default DrawArray;
