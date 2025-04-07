import styles from "./index.module.scss";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

export const Modal = ({ title, children, showModal, handleClose }) => {
  return (
    <Dialog
      open={showModal}
      onClose={handleClose}
    >
      <div className={styles.modal}>
        {title && <h3 className={styles.modal__title}>{title}</h3>}
        <DialogContent>{children}</DialogContent>
      </div>
    </Dialog>
  );
};
