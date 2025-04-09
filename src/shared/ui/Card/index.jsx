import styles from "./index.module.scss";
import { Button } from "@mui/material";

import Edit from "../../../assets/icons/edit.svg?react";
import AddPhoto from "../../../assets/icons/add-photo.svg?react";
import Check from "../../../assets/icons/check.svg?react";
import Cancel from "../../../assets/icons/cancel.svg?react";

import { styled } from "@mui/material/styles";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export const Card = ({
  children,
  title,
  withEditButton,
  withAddButton,
  setIsEditing,
  isEditing,
  cardType,
  handleSave,
  handleAdd,
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
          <Button
            component="label"
            role={undefined}
            tabIndex={-1}
            className={styles.card__button}
            startIcon={<AddPhoto />}
          >
            Add
            <VisuallyHiddenInput
              type="file"
              onChange={(event) => handleAdd(event.target.files)}
              multiple
            />
          </Button>
        )}
      </div>
      <div className={styles.card__content}> {children}</div>
    </section>
  );
};
