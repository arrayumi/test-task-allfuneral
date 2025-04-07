import { Routes, Route } from "react-router-dom";
import * as page from "../pages";

function App() {
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
