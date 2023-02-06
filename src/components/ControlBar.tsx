import {
  Autocomplete,
  Button,
  FormControlLabel,
  FormGroup,
  Slider,
  Switch,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { ControlState } from "../types/controlState";

const algorithmTypeOptions = [
  "Bubble Sort",
  "Quicksort",
  "Insertion Sort",
  "Merge Sort",
  "Selection Sort",
];

const minDistance = 10;

function sortSpeedPercentage(value: number) {
  return `${value}%`;
}

function ControlBar({
  controls,
  setControls,
}: {
  controls: ControlState;
  setControls: React.Dispatch<React.SetStateAction<ControlState>>;
}) {
  const [algorithmType, setAlgorithmType] = useState<string[]>([
    algorithmTypeOptions[0],
    algorithmTypeOptions[1],
  ]);
  const [valueRange, setValueRange] = useState<number[]>([20, 360]);
  const [items, setItems] = useState<number>(50);
  const [sortSpeed, setSortSpeed] = useState<number>(50);
  const [algorithmTypeInputValue, setAlgorithmTypeInputValue] = useState<
    string[]
  >(["", ""]);
  const { visualize, compare, reset } = controls;

  useEffect(() => {
    setControls({
      algorithm: algorithmType,
      valueRange: valueRange,
      items: items,
      sortSpeed: sortSpeed,
      visualize: visualize,
      compare: compare,
      reset: reset,
    });
  }, [
    algorithmType,
    valueRange,
    items,
    sortSpeed,
    visualize,
    compare,
    reset,
    setControls,
  ]);

  const handleValueRangeChange = (
    event: Event,
    newValue: number | number[],
    activeThumb: number,
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValueRange([
        Math.min(newValue[0], valueRange[1] - minDistance),
        valueRange[1],
      ]);
    } else {
      setValueRange([
        valueRange[0],
        Math.max(newValue[1], valueRange[0] + minDistance),
      ]);
    }
  };

  const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setControls({ ...controls, compare: !compare });
  };

  return (
    <Toolbar id="controlBar">
      <div id="controlBar-body">
        <Button
          id="visualizeButton"
          variant="outlined"
          sx={{
            my: 1,
            mx: 1.5,
            backgroundColor: "#1976D2",
            color: "#ffffff",
          }}
          onClick={() => setControls({ ...controls, visualize: !visualize })}
        >
          Visualize
        </Button>
        <Autocomplete
          value={algorithmType[0]}
          onChange={(event: any, newValue: string | null) =>
            setAlgorithmType([newValue as string, algorithmType[1]])
          }
          inputValue={algorithmTypeInputValue[0]}
          onInputChange={(event, newInputValue) => {
            setAlgorithmTypeInputValue([
              newInputValue as string,
              algorithmTypeInputValue[1],
            ]);
          }}
          id="controllable-states"
          options={algorithmTypeOptions}
          sx={{ width: 300, my: 1.5 }}
          renderInput={(params) => <TextField {...params} label="Algorithm" />}
        />
        {compare && (
          <Autocomplete
            value={algorithmType[1]}
            onChange={(event: any, newValue: string | null) =>
              setAlgorithmType([algorithmType[0], newValue as string])
            }
            inputValue={algorithmTypeInputValue[1]}
            onInputChange={(event, newInputValue) => {
              setAlgorithmTypeInputValue([
                algorithmTypeInputValue[1],
                newInputValue as string,
              ]);
            }}
            id="controllable-states"
            options={algorithmTypeOptions}
            sx={{ width: 300, my: 1.5 }}
            renderInput={(params) => (
              <TextField {...params} label="Algorithm" />
            )}
          />
        )}
        <div className="input-slider">
          <Slider
            value={valueRange}
            onChange={handleValueRangeChange}
            valueLabelDisplay="auto"
            step={10}
            min={10}
            max={360}
          />
          <Typography gutterBottom>VALUE RANGE</Typography>
        </div>
        <div className="input-slider">
          <Slider
            onChange={(
              event: Event,
              value: number | number[],
              activeThumb: number,
            ) => setItems(value as number)}
            defaultValue={50}
            valueLabelDisplay="auto"
            min={10}
            max={1000}
          />
          <Typography gutterBottom># OF ITEMS</Typography>
        </div>
        <div className="input-slider">
          <Slider
            onChange={(e, value: number | number[], activeThumb) =>
              setSortSpeed(value as number)
            }
            defaultValue={50}
            valueLabelDisplay="auto"
            valueLabelFormat={sortSpeedPercentage}
          />
          <Typography gutterBottom>SORT SPEED</Typography>
        </div>
        <FormGroup>
          <FormControlLabel
            control={<Switch checked={compare} onChange={handleSwitchChange} />}
            label="COMPARE?"
            labelPlacement="bottom"
          />
        </FormGroup>
        <Button
          id="visualizeButton"
          variant="outlined"
          sx={{
            my: 1,
            mx: 1.5,
            backgroundColor: "#1976D2",
            color: "#ffffff",
          }}
          onClick={() => setControls({ ...controls, reset: reset + 1 })}
        >
          RESET
        </Button>
      </div>
    </Toolbar>
  );
}

export default ControlBar;
