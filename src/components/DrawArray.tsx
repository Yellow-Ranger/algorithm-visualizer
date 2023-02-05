import { red } from "@mui/material/colors";
import React, { useRef, useState, useEffect } from "react";
import { ControlState } from "../types/controlState";

const DrawArray = ({
  controls,
  height,
  width,
  topPosition,
}: {
  controls: ControlState;
  height: number;
  width: number;
  topPosition: number;
}) => {
  const { algorithm, valueRange, items, sortSpeed, visualize, compare, reset } =
    controls;

  const [randomArray, setRandomArray] = useState<number[]>([]);

  useEffect(() => {
    generateArray();
  }, [valueRange, items, reset]);

  function generateArray() {
    let temp: number[] = [];
    for (let i = 0; i < items; i++) {
      temp.push(
        Math.floor(
          Math.random() * (valueRange[1] - valueRange[0]) + valueRange[0],
        ),
      );
    }
    setRandomArray(temp);
    // console.log(randomArray);
  }

  return (
    <div className="array-container" style={{ top: topPosition }}>
      {randomArray.map((value, index, array) => {
        return (
          <div
            className="array-el"
            key={index}
            style={{
            //   width: `${1300 / items}px`,
            //   display: "inline-block",
              height: value,
            }}
          >
            {items > 50 ? "." : value}
          </div>
        );
      })}
    </div>
  );
};

export default DrawArray;
