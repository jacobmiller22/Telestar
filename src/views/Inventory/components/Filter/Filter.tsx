import React from "react";

/** Components */
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { Dispatch } from "react";

interface IFilterProps {
  state: {
    filterValue: string[];
    setFilterValue: React.Dispatch<React.SetStateAction<string[]>>;
  };
  options: string[];
}

const Filter = ({ state, options }: IFilterProps) => {
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;

  const handleChange = (event: any) => {
    state.setFilterValue(event?.target.value);
  };

  return (
    <FormControl sx={{ m: 1, width: 300 }} size="small">
      <InputLabel>Type</InputLabel>
      <Select
        label="Type"
        size="small"
        multiple
        value={state.filterValue}
        onChange={handleChange}
        input={<OutlinedInput label="Tag" />}
        renderValue={(selected) => selected.join(", ")}
        MenuProps={{
          PaperProps: {
            style: {
              maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
              width: 250,
            },
          },
        }}
      >
        {options.map((options) => (
          <MenuItem key={options} value={options}>
            <Checkbox checked={state.filterValue.indexOf(options) > -1} />
            <ListItemText primary={options} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Filter;
