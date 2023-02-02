import {
  Autocomplete,
  Button,
  FormControlLabel,
  FormGroup,
  Link,
  Slider,
  Switch,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { Dispatch, SetStateAction, useState } from "react";

const algorithmTypeOptions = [
  "Bubble Sort",
  "Binary Search",
  "Quicksort",
  "Insertion Sort",
  "Merge Sort",
  "Selection Sort",
];

const minDistance = 10;

function sortSpeedPercentage(value: number) {
  return `${value}%`;
}

function ControlBar() {
  const [algorithmType, setAlgorithmType] = useState<string[]>([
    algorithmTypeOptions[0],
    algorithmTypeOptions[1],
  ]);
  const [algorithmTypeInputValue, setAlgorithmTypeInputValue] = useState<
    string[]
  >(["", ""]);
  const [valueRange, setValueRange] = useState<number[]>([20, 100]);
  const [compareAlgorithms, setCompareAlgorithms] = useState<boolean>(false);

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
    setCompareAlgorithms(event.target.checked);
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
        {compareAlgorithms && (
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
            max={1000}
          />
          <Typography gutterBottom>VALUE RANGE</Typography>
        </div>
        <div className="input-slider">
          <Slider
            defaultValue={50}
            valueLabelDisplay="auto"
            min={10}
            max={1000}
          />
          <Typography gutterBottom># OF ITEMS</Typography>
        </div>
        <div className="input-slider">
          <Slider
            defaultValue={50}
            valueLabelDisplay="auto"
            valueLabelFormat={sortSpeedPercentage}
          />
          <Typography gutterBottom>SORT SPEED</Typography>
        </div>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={compareAlgorithms}
                onChange={handleSwitchChange}
              />
            }
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
        >
          RESET
        </Button>
      </div>
    </Toolbar>
  );
}

export default ControlBar;
