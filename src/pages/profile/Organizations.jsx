import styles from "./index.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { getCompanyData } from "../../app/store";

import { Card } from "../../shared/ui/Card";
import snakeCaseToText from "../../shared/utils/snakeCaseToText";

import { IconButton } from "@mui/material";
import Edit from "../../assets/icons/edit.svg?react";
import Trash from "../../assets/icons/trash.svg?react";
import Arrow from "../../assets/icons/arrow.svg?react";

import { Modal } from "../../shared/ui/Modal";
import {
  setIsDeleteCompanyModalOpen,
  setIsEditCompanyNameModalOpen,
} from "../../app/store/slices/modalsSlice";
import { getModals } from "../../app/store";

import * as ui from "../../shared/ui";

import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { DateField } from "@mui/x-date-pickers";

export const Organizations = () => {
  const dispatch = useDispatch();
  const { companyData, companyContact } = useSelector(getCompanyData);
  const { isDeleteCompanyModalOpen, isEditCompanyNameModalOpen } =
    useSelector(getModals);

  const [editCompanyDetails, setEditCompanyDetails] = useState(false);
  const [editCompanyContacts, setEditCompanyContacts] = useState(false);

  const [selectedDate, setSelectedDate] = useState(null);

  const {
    formState: { isValid, isSubmitting },
    watch,
    register,
    setValue,
  } = useForm({
    mode: "onChange",
  });

  const [entity, setEntity] = useState("");
  const [companyType, setCompanyType] = useState([]);

  useEffect(() => {
    if (companyContact && companyData) {
      setValue("name", companyData.name);
      setValue(
        "username",
        `${companyContact.firstname} ${companyContact.lastname}`
      );
      setValue("phone", companyContact.phone);
      setValue("email", companyContact.email);
    }
  }, [companyContact, companyData]);

  console.log(companyData);

  return (
    <div className={styles.profile__content}>
      {companyData ? (
        <>
          <div className={styles["profile__title-container"]}>
            <IconButton
              className={`${styles["profile__title-button"]} ${styles["profile__title-button_type_back"]}`}
            >
              <Arrow />
            </IconButton>
            <h1>{companyData?.name}</h1>
            <IconButton
              className={`${styles["profile__title-button"]} ${styles["profile__title-button_type_edit"]}`}
              onClick={() => dispatch(setIsEditCompanyNameModalOpen(true))}
            >
              <Edit />
            </IconButton>
            <IconButton
              className={`${styles["profile__title-button"]} ${styles["profile__title-button_type_delete"]}`}
              onClick={() => dispatch(setIsDeleteCompanyModalOpen(true))}
            >
              <Trash />
            </IconButton>
          </div>
          <Card
            title="Company Details"
            withEditButton
            setIsEditing={setEditCompanyDetails}
            isEditing={editCompanyDetails}
          >
            <ul className={styles["profile__cards-list"]}>
              <li>
                {!editCompanyDetails ? (
                  <>
                    <label>Agreement:</label>
                    <p>
                      {companyData?.contract?.no}
                      <span>{`   /   `}</span>
                      {companyData?.contract?.issue_date.split("T")[0]}
                    </p>
                  </>
                ) : (
                  <div className={styles.fields}>
                    <div className={styles.fields__item}>
                      <label>Agreement number:</label>
                      <ui.Input sx={{width: "100%"}}/>
                    </div>
                    <div className={styles.fields__item}>
                      <h5 >Date:</h5>
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                          value={selectedDate}
                          onChange={(newValue) => {
                            setSelectedDate(newValue);
                          }}
                          renderInput={(params) => (
                            <ui.Input {...params} value={selectedDate} />
                          )}
                          sx={{ width: "100%" }}
                        />
                      </LocalizationProvider>
                    </div>
                  </div>
                )}
              </li>
              <li>
                <label>Business Entity:</label>
                {editCompanyDetails ? (
                  <ui.Select
                    item={entity}
                    setItem={setEntity}
                    items={[
                      "Sole Proprietorship",
                      "Partnership",
                      "Limited Liability Company",
                    ]}
                  />
                ) : (
                  <p>{companyData?.businessEntity}</p>
                )}
              </li>
              <li>
                <label>Company type:</label>
                {editCompanyDetails ? (
                  <ui.MultipleSelect
                    item={companyType}
                    setItem={setCompanyType}
                    items={[
                      "Funeral home",
                      "Logistics services",
                      "Burial care contractor",
                    ]}
                  />
                ) : (
                  <p>
                    {companyData?.type.map((item, index) =>
                      index === companyData.type.length - 1
                        ? snakeCaseToText(item)
                        : snakeCaseToText(item) + ", "
                    )}
                  </p>
                )}
              </li>
            </ul>
          </Card>
          <Card
            title="Contacts"
            withEditButton
            setIsEditing={setEditCompanyContacts}
            isEditing={editCompanyContacts}
          >
            <ul className={styles["profile__cards-list"]}>
              <li>
                <label>Responsible person:</label>
                {editCompanyContacts ? (
                  <ui.Input {...register("username")} />
                ) : (
                  <p>{`${companyContact?.firstname} ${companyContact?.lastname}`}</p>
                )}
              </li>
              <li>
                <label>Phone number:</label>
                {editCompanyContacts ? (
                  <ui.Input {...register("phone")} />
                ) : (
                  <p>{companyContact?.phone}</p>
                )}
              </li>
              <li>
                <label>E-mail:</label>
                {editCompanyContacts ? (
                  <ui.Input {...register("email")} />
                ) : (
                  <p>{companyContact?.email}</p>
                )}
              </li>
            </ul>
          </Card>
          <Card title="Photos" withAddButton>
            <ul className={styles["profile__photos"]}>
              {companyData?.photos ? (
                companyData?.photos.map((photo, index) => {
                  return (
                    <li key={index}>
                      <IconButton>
                        <Trash />
                      </IconButton>
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
          <Modal
            showModal={isEditCompanyNameModalOpen}
            handleClose={() => dispatch(setIsEditCompanyNameModalOpen(false))}
            title="Specify the Organization's name"
          >
            <div className={styles.modal}>
              <ui.Input {...register("name")} />
              <div className={styles.buttons}>
                <ui.Button
                  onClick={() => dispatch(setIsEditCompanyNameModalOpen(false))}
                >
                  Cancel
                </ui.Button>
                <ui.Button style="primary">Save changes</ui.Button>
              </div>
            </div>
          </Modal>
          <Modal
            showModal={isDeleteCompanyModalOpen}
            handleClose={() => dispatch(setIsDeleteCompanyModalOpen(false))}
            title="Remove the Organization?"
          >
            <div className={styles.modal}>
              <p>Are you sure you want to remove this Organization?</p>
              <div className={styles.buttons}>
                <ui.Button
                  onClick={() => dispatch(setIsDeleteCompanyModalOpen(false))}
                >
                  No
                </ui.Button>
                <ui.Button style="primary">Yes, remove</ui.Button>
              </div>
            </div>
          </Modal>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
