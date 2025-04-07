import styles from "./index.module.scss";
import { useSelector } from "react-redux";
import { getCompanyData } from "../../app/store";

export const Organizations = () => {
  const { companyData } = useSelector(getCompanyData);
  console.log(companyData);

  return <div className={styles.profile__content}>Organizations</div>;
};
