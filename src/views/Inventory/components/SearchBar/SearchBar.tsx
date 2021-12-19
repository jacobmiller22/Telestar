import { useState } from "react";

/** Components */

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

interface ISearchBarProps {
  options: string[];
}

const SearchBar = ({ options }: ISearchBarProps) => {
  return (
    <Autocomplete
      freeSolo
      options={options}
      renderInput={(props) => <TextField {...props} label="Search.." />}
      fullWidth
      size="small"
    />
  );
};

export default SearchBar;
