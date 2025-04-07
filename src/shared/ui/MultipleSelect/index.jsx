import {
  Select as MuiSelect,
  MenuItem,
  Checkbox,
  ListItemText,
  OutlinedInput,
} from "@mui/material";

export const MultipleSelect = ({ item, setItem, items }) => {
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setItem(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <MuiSelect
      labelId="demo-multiple-checkbox-label"
      id="demo-multiple-checkbox"
      multiple
      value={item}
      onChange={handleChange}
      input={<OutlinedInput />}
      renderValue={(selected) => selected.join(", ")}
      sx={{ width: "100%" }}
    >
      {items.map((name) => (
        <MenuItem key={name} value={name}>
          <Checkbox checked={item.includes(name)} />
          <ListItemText primary={name} />
        </MenuItem>
      ))}
    </MuiSelect>
  );
};
