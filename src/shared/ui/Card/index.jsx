import styles from "./index.module.scss";
import { Button } from "@mui/material";

import Edit from "../../../assets/icons/edit.svg?react";
import AddPhoto from "../../../assets/icons/add-photo.svg?react";
import Check from "../../../assets/icons/check.svg?react";
import Cancel from "../../../assets/icons/cancel.svg?react";

export const Card = ({
  children,
  title,
  withEditButton,
  withAddButton,
  setIsEditing,
  isEditing,
  cardType,
  handleSave,
}) => {
  const renderButtons = (isEditing) => {
    return isEditing ? (
      <div className={styles.card__buttons}>
        <Button
          className={styles.card__button}
          onClick={() => {
            handleSave(cardType);
            setIsEditing(false);
          }}
          startIcon={<Check />}
        >
          Save changes
        </Button>
        <Button
          className={styles.card__button}
          onClick={() => setIsEditing(false)}
          startIcon={<Cancel />}
        >
          Cancel
        </Button>
      </div>
    ) : (
      <Button
        className={styles.card__button}
        onClick={() => setIsEditing(true)}
        startIcon={<Edit />}
      >
        Edit
      </Button>
    );
  };

  return (
    <section className={styles.card}>
      <div className={styles["card__title-container"]}>
        <h3>{title}</h3>
        {withEditButton && renderButtons(isEditing)}
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
