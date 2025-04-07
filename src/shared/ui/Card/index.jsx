import styles from "./index.module.scss";
import { Button } from "@mui/material";

import Edit from "../../../assets/icons/edit.svg?react";
import AddPhoto from "../../../assets/icons/add-photo.svg?react";

export const Card = ({ children, title, withEditButton, withAddButton }) => {
  return (
    <section className={styles.card}>
      <div className={styles["card__title-container"]}>
        <h3>{title}</h3>
        {withEditButton && (
          <Button className={styles.card__button} startIcon={<Edit />}>
            Edit
          </Button>
        )}
        {withAddButton && (
          <Button className={styles.card__button} startIcon={<AddPhoto />}>
            Add
          </Button>
        )}
      </div>
      <div className={styles.card__content}> {children}</div>
    </section>
  );
};
