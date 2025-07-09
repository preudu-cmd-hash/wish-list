import { Route, Routes } from "react-router";
import App from "../App";
import { Layout } from "../Components/Layout/Layout";

export const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/wish-list" element={<App />} />
      </Route>
    </Routes>
  );
};
