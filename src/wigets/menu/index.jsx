import styles from "./index.module.scss";
import IconButton from "@mui/material/IconButton";

import { useState } from "react";

import OakTreeLogo from "@/assets/icons/oak-tree-logo.svg?react";
import Briefcase from "@/assets/icons/briefcase.svg?react";
import Search from "@/assets/icons/search.svg?react";
import Settings from "@/assets/icons/settings.svg?react";
import SignOut from "@/assets/icons/sign-out.svg?react";

import { Sidebar } from "./Sidebar";

export const Menu = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <>
      <nav className={styles.menu}>
        <ul className={styles.menu__list}>
          <li>
            <OakTreeLogo />
          </li>

          <li>
            <IconButton
              className={`${styles.menu__button} ${
                openSidebar ? styles["menu__button_active"] : null
              }`}
              onClick={() => setOpenSidebar(!openSidebar)}
            >
              <Briefcase />
            </IconButton>
          </li>

          <li>
            <IconButton className={styles.menu__button}>
              <Search />
            </IconButton>
          </li>

          <li>
            <IconButton className={styles.menu__button}>
              <Settings />
            </IconButton>
          </li>

          <li>
            <IconButton className={styles.menu__button}>
              <SignOut />
            </IconButton>
          </li>
        </ul>
      </nav>
      <Sidebar openSidebar={openSidebar} />
    </>
  );
};
