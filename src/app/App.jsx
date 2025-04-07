import { Routes, Route } from "react-router-dom";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authorize } from "./store/slices/userSlice";
import { getCompany, getContact} from "./store/slices/companySlice";

import * as page from "../pages";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!localStorage.getItem("access")) {
      dispatch(authorize());
    } else {
      dispatch(getCompany());
      dispatch(getContact());
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<page.Profile />}>
        <Route path="/organizations" element={<page.Organizations />}></Route>
        <Route path="/contractors" element={<page.Contractors />}></Route>
        <Route path="/clients" element={<page.Clients />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
