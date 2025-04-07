import styles from "./index.module.scss";
import { useSelector } from "react-redux";
import { getCompanyData } from "../../app/store";

import { Card } from "../../shared/ui/Card";
import snakeCaseToText from "../../shared/utils/snakeCaseToText";

import { IconButton } from "@mui/material";
import Edit from "../../assets/icons/edit.svg?react";
import Trash from "../../assets/icons/trash.svg?react";
import Arrow from "../../assets/icons/arrow.svg?react";

export const Organizations = () => {
  const { companyData, companyContact } = useSelector(getCompanyData);
  console.log(companyData);

  return (
    <div className={styles.profile__content}>
      <div className={styles["profile__title-container"]}>
        <IconButton
          className={`${styles["profile__title-button"]} ${styles["profile__title-button_type_back"]}`}
        >
          <Arrow />
        </IconButton>
        <h1>{companyData?.name}</h1>
        <IconButton
          className={`${styles["profile__title-button"]} ${styles["profile__title-button_type_edit"]}`}
        >
          <Edit />
        </IconButton>
        <IconButton
          className={`${styles["profile__title-button"]} ${styles["profile__title-button_type_delete"]}`}
        >
          <Trash />
        </IconButton>
      </div>
      <Card title="Company Details" withEditButton>
        <ul className={styles["profile__cards-list"]}>
          <li>
            <label>Agreement:</label>
            <p>
              {companyData?.contract?.no}
              <span>{`   /   `}</span>
              {companyData?.contract?.issue_date.split("T")[0]}
            </p>
          </li>
          <li>
            <label>Business Entity:</label>
            <p>{companyData?.businessEntity}</p>
          </li>
          <li>
            <label>Company type:</label>
            <p>
              {companyData?.type.map((item, index) =>
                index === companyData.type.length - 1
                  ? snakeCaseToText(item)
                  : snakeCaseToText(item) + ", "
              )}
            </p>
          </li>
        </ul>
      </Card>
      <Card title="Contacts" withEditButton>
        <ul className={styles["profile__cards-list"]}>
          <li>
            <label>Responsible person:</label>
            <p>{`${companyContact?.firstname} ${companyContact?.lastname}`}</p>
          </li>
          <li>
            <label>Phone number:</label>
            <p>{companyContact?.phone}</p>
          </li>
          <li>
            <label>E-mail:</label>
            <p>{companyContact?.email}</p>
          </li>
        </ul>
      </Card>
      <Card title="Photos" withAddButton>
        <ul  className={styles["profile__photos"]}>
          {companyData?.photos ? (
            companyData?.photos.map((photo) => {
              console.log(photo.thumbpath);
              return (
                <li>
                  {" "}
                  <img
                    className={styles.profile__photo}
                    src={photo.thumbpath}
                  />
                </li>
              );
            })
          ) : (
            <p>No photos yet</p>
          )}
        </ul>
      </Card>
    </div>
  );
};
