import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const DropdownPrice = ({ handlePrice }) => {
  const [priceRange, setPriceRange] = React.useState("");

  const handleChange = (event) => {
    setPriceRange(event.target.value);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ minWidth: 120, marginBottom: 1 }}>
        <InputLabel id="demo-simple-select-standard-label">Price</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          label="Price"
          value={priceRange}
          onChange={handleChange}
        >
          <MenuItem value="" onClick={() => handlePrice(false)}>
            <em>None</em>
          </MenuItem>
          <MenuItem value="$" onClick={() => handlePrice("$")}>
            $
          </MenuItem>
          <MenuItem value="$$" onClick={() => handlePrice("$$")}>
            $$
          </MenuItem>
          <MenuItem value="$$$" onClick={() => handlePrice("$$$")}>
            $$$
          </MenuItem>
          <MenuItem value="$$$$" onClick={() => handlePrice("$$$$")}>
            $$$$
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default DropdownPrice;
