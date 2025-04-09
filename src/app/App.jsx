import { Routes, Route, Navigate } from "react-router-dom";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authorize } from "./store/slices/userSlice";
import { getCompany, getContact } from "./store/slices/companySlice";
import { getUserData } from "./store";

import * as page from "../pages";

function App() {
  const dispatch = useDispatch();
  const { isAuthorized } = useSelector(getUserData);

  useEffect(() => {
    if (!isAuthorized) {
      dispatch(authorize());
    } else {
      dispatch(getCompany());
      dispatch(getContact());
    }
  }, [isAuthorized]);

  return (
    <Routes>
      <Route path="/" element={<page.Profile />}>
        <Route
          path="/organizations/12"
          element={<page.Organizations />}
        ></Route>
        <Route path="/contractors" element={<page.Contractors />}></Route>
        <Route path="/clients" element={<page.Clients />}></Route>
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
