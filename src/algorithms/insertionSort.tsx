import { NumberWithId } from "../types/numberWithId";
import { StepState } from "../types/stepState";

export default function InsertionSort(
  randomArray: NumberWithId[],
  stepState: StepState,
  setStepState: React.Dispatch<React.SetStateAction<StepState>>,
) {
  let i, j, temp;
  for (i = 1; i < randomArray.length; i++) {
    temp = randomArray[i]
    setStepState({ ...stepState, comparedIndexes: [randomArray[i].id, randomArray[i - 1].id] });
    for (j = i - 1; j >= 0 && randomArray[j].value > temp.value; j--) {
    setStepState({ ...stepState, comparedIndexes: [randomArray[i].id, randomArray[j].id] });
      randomArray[j + 1] = randomArray[j]
      setStepState({ ...stepState, newArray: randomArray });
    }
    randomArray[j + 1] = temp
    setStepState({ ...stepState, newArray: randomArray });
  }
  setStepState({ ...stepState, ordered: true });
  console.log("Insertion Sort");
}