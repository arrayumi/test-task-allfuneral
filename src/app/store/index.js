import { configureStore } from "@reduxjs/toolkit";
import userDataReducer from "./slices/userSlice";
import companyDataReducer from "./slices/companySlice";

export default configureStore({
  reducer: { userData: userDataReducer, companyData: companyDataReducer },
});

export { getUserData, getCompanyData } from "./selectors";
export * as selectors from "./selectors";
