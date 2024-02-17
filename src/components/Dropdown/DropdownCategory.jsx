import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const DropdownCategory = ({ handleCategory }) => {
  const [category, setCategory] = React.useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ minWidth: 140, marginBottom: 1 }}>
        <InputLabel id="demo-simple-select-standard-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          label="Price"
          value={category}
          onChange={handleChange}
        >
          <MenuItem value="" onClick={() => handleCategory(false)}>
            <em>None</em>
          </MenuItem>
          <MenuItem value="Turkish" onClick={() => handleCategory("Turkish")}>
            Turkish
          </MenuItem>
          <MenuItem value="French" onClick={() => handleCategory("French")}>
            French
          </MenuItem>
          <MenuItem
            value="Indonesian"
            onClick={() => handleCategory("Indonesian")}
          >
            Indonesian
          </MenuItem>
          <MenuItem value="European" onClick={() => handleCategory("European")}>
            European
          </MenuItem>
          <MenuItem value="Japanese" onClick={() => handleCategory("Japanese")}>
            Japanese
          </MenuItem>
          <MenuItem value="Chinese" onClick={() => handleCategory("Chinese")}>
            Chinese
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default DropdownCategory;
