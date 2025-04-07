import { configureStore } from "@reduxjs/toolkit";
import userDataReducer from "./slices/userSlice";

export default configureStore({
  reducer: { userData: userDataReducer },
});

export { getUserData } from "./selectors";
export * as selectors from "./selectors";
