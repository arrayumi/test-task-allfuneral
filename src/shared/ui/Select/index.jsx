import { MenuItem, Select as MuiSelect } from "@mui/material";

export const Select = ({ item, setItem, items }) => {
  const handleChange = (event) => {
    setItem(event.target.value);
  };

  return (
    <MuiSelect
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={item}
      onChange={handleChange}
      sx={{ width: "100%" }}
    >
      {items.map((i, index) => {
        return (
          <MenuItem key={index} value={i}>
            {i}
          </MenuItem>
        );
      })}
    </MuiSelect>
  );
};
