import { Outlet } from "react-router-dom";
import styles from "./index.module.scss";

import { Menu } from "../../wigets/menu";

export const Profile = () => {
  return (
    <main className={styles.profile}>
      <Menu />
      <Outlet />
    </main>
  );
};
