import { NumberWithId } from "../types/numberWithId";
import { StepState } from "../types/stepState";

export default function QuickSort(
  randomArray: NumberWithId[],
  stepState: StepState,
  setStepState: React.Dispatch<React.SetStateAction<StepState>>,
) {
  function quickSort(arr: NumberWithId[]): any {
    if (arr.length <= 1) {
      return arr;
    } else {
      let left = [];
      let right = [];
      let newArray: any[] = [];
      let pivot = arr.pop();

      for (let i = 0; i < arr.length; i++) {
          if (pivot) {
            setStepState({ ...stepState, comparedIndexes: [arr[i].id, pivot.id] });
          if (arr[i].value <= pivot.value) {
            left.push(arr[i]);
          } else {
            right.push(arr[i]);
          }
        }
      }

      return newArray.concat(
        quickSort(left),
        pivot,
        quickSort(right),
      ) as NumberWithId[];
    }
  }

  let orderedArray = quickSort(randomArray);
  setStepState({ ...stepState, newArray: orderedArray, ordered: true });
  console.log("Quick Sort");
}
