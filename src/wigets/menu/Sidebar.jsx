import styles from "./index.module.scss";
import { Collapse, Button } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

import { PROCESS_MANAGER_BUTTONS } from "../../app/constants";

export const Sidebar = ({ openSidebar }) => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  return (
    <Collapse orientation="horizontal" in={openSidebar}>
      <div className={styles.menu__sidebar}>
        <div className={styles["menu__sidebar-title-container"]}>
          <h2>Oak Tree Cemetery</h2>
          <p>Process Manager</p>
        </div>
        <ul className={styles["menu__sidebar-buttons"]}>
          {PROCESS_MANAGER_BUTTONS.map((button, index) => (
            <li key={index}>
              <Button
                className={`${styles["menu__sidebar-button"]} ${
                  location.pathname === button.path
                    ? styles["menu__sidebar-button_active"]
                    : ""
                }`}
                onClick={() => navigate(button.path)}
              >
                {button.icon}
                {button.title}
              </Button>
            </li>
          ))}
        </ul>
        <p className={styles["menu__sidebar-caption"]}>
          All Funeral Services © 2015-2025
        </p>
      </div>
    </Collapse>
  );
};
