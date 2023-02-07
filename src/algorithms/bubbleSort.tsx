import { NumberWithId } from "../types/numberWithId";
import { StepState } from "../types/stepState";

export default function BubbleSort(
  randomArray: NumberWithId[],
  stepState: StepState,
  setStepState: React.Dispatch<React.SetStateAction<StepState>>,
) {
  let i, j, temp;
  for (i = 0; i < randomArray.length; i++) {
    for (j = 0; j < randomArray.length - 1; j++) {
      setStepState({ ...stepState, comparedIndexes: [randomArray[j].id, randomArray[j + 1].id] });
      if (randomArray[j].value > randomArray[j + 1].value) {
        temp = randomArray[j];
        randomArray[j] = randomArray[j + 1];
        randomArray[j + 1] = temp;
        setStepState({ ...stepState, newArray: randomArray });
        // console.log("Current Step: ", stepState);
      }
    }
  }
  setStepState({ ...stepState, ordered: true });
//   console.log("Current Step: ", stepState);
  console.log("Bubble Sort");
}
