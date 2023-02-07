import React, { useState, useEffect } from "react";
import BubbleSort from "../algorithms/bubbleSort";
import InsertionSort from "../algorithms/insertionSort";
import MergeSort from "../algorithms/mergeSort";
import QuickSort from "../algorithms/quickSort";
import SelectionSort from "../algorithms/selectionSort";
import { ControlState } from "../types/controlState";
import { NumberWithId } from "../types/numberWithId";
import { StepState } from "../types/stepState";

//creating custom hook to use different algorithms on generated array
//return's array animations

const useAlgorithm = (
  randomArray: NumberWithId[],
  setRandomArray: React.Dispatch<React.SetStateAction<NumberWithId[]>>,
  nextStep: StepState,
  setNextStep: React.Dispatch<React.SetStateAction<StepState>>,
  controls: ControlState,
) => {
  useEffect(() => {
    if (controls.visualize) {
      switch (controls.algorithm[0]) {
        case "Bubble Sort":
          //   console.log("Use Algorithm");
          //   console.log("Unordered Array: ", randomArray);
          BubbleSort(randomArray, nextStep, setNextStep);
          //   console.log("Ordered Array: ", randomArray);
          break;
        case "Quicksort":
          QuickSort(randomArray, nextStep, setNextStep);
          break;
        case "Insertion Sort":
          InsertionSort(randomArray, nextStep, setNextStep);
          break;
        case "Merge Sort":
          MergeSort(randomArray, nextStep, setNextStep);
          break;
        case "Selection Sort":
          SelectionSort(randomArray, nextStep, setNextStep);
          break;
      }
    }
  }, [controls]);
};

export default useAlgorithm;
