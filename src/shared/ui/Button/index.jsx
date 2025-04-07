import styles from "./index.module.scss";
import { Button as MuiButton } from "@mui/material";

export const Button = ({ children, active, style = "secondary", ...props }) => {
  return (
    <MuiButton
      className={`${styles.button}  ${
        active || style === "primary" ? styles["button_active"] : null
      }`}
      {...props}
    >
      {children}
    </MuiButton>
  );
};
