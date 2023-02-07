import { NumberWithId } from "../types/numberWithId";
import { StepState } from "../types/stepState";

export default function SelectionSort(
  randomArray: NumberWithId[],
  stepState: StepState,
  setStepState: React.Dispatch<React.SetStateAction<StepState>>,
) {
  function selectionSort(arr: NumberWithId[]) {
    let i, j, min;
    for (i = 0; i < arr.length - 1; i++) {
      min = i;
      for (j = i + 1; j < arr.length; j++) {
        setStepState({
          ...stepState,
          comparedIndexes: [arr[j].id, arr[min].id],
        });
        if (arr[j].value < arr[min].value) {
          min = j;
        }
      }
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
    return arr;
  }
  let orderedArray = selectionSort(randomArray);
  setStepState({ ...stepState, newArray: orderedArray, ordered: true });
  console.log("Selection Sort");
}
