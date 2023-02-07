import { NumberWithId } from "../types/numberWithId";
import { StepState } from "../types/stepState";

export default function MergeSort(
  randomArray: NumberWithId[],
  stepState: StepState,
  setStepState: React.Dispatch<React.SetStateAction<StepState>>,
) {
  function merge(left: NumberWithId[], right: NumberWithId[]) {
    let sortedArr = [];
    setStepState({ ...stepState, comparedIndexes: [left[0].id, right[0].id] });
    while (left.length && right.length) {
      setStepState({
        ...stepState,
        comparedIndexes: [left[0].id, right[0].id],
      });

      if (left[0].value < right[0].value) {
        sortedArr.push(left.shift());
        // setStepState({ ...stepState, newArray: sortedArr as NumberWithId[] });
      } else {
        sortedArr.push(right.shift());
        // setStepState({ ...stepState, newArray: sortedArr as NumberWithId[] });
      }
    }

    setStepState({ ...stepState, newArray: sortedArr as NumberWithId[] });
    return [...sortedArr, ...left, ...right];
  }

  function mergeSort(arr: NumberWithId[]): any {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);

    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
  }

  mergeSort(randomArray);
  setStepState({ ...stepState, ordered: true });
  console.log("Merge Sort");
}
