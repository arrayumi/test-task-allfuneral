import styles from "./index.module.scss";
import { TextField } from "@mui/material";

export const Input = (props) => {
  return <TextField  id="outlined" className={styles.input} {...props} />;
};
