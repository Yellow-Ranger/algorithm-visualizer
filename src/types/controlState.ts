import { Dispatch, SetStateAction } from "react";

export type ControlState = {
    algorithm: string[];
    valueRange: number[];
    items: number;
    sortSpeed: number;
    visualize: boolean;
    compare: boolean;
    reset: number;
}