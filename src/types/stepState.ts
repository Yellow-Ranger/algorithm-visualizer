import { Dispatch, SetStateAction } from "react";
import { NumberWithId } from "./numberWithId";

export type StepState = {
  comparedIndexes: number[];
  newArray: NumberWithId[];
  ordered: boolean;
};
