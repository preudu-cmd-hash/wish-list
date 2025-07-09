import { Route, Routes } from "react-router";
import App from "../App";

export const Router = () => {
  return (
    <Routes>
      <Route path="/wish-list" element={<App />} />
    </Routes>
  );
};
