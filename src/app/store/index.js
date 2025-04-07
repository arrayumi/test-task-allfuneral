import { configureStore } from "@reduxjs/toolkit";
import userDataReducer from "./slices/userSlice";
import companyDataReducer from "./slices/companySlice";
import modalsReducer from "./slices/modalsSlice";

export default configureStore({
  reducer: {
    userData: userDataReducer,
    companyData: companyDataReducer,
    modals: modalsReducer,
  },
});

export { getUserData, getCompanyData, getModals } from "./selectors";
export * as selectors from "./selectors";
