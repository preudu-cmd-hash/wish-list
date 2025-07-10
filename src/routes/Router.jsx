import { Route, Routes } from "react-router";
import App from "../App";
import { Layout } from "../Components/Layout/Layout";
import { useCallback, useState } from "react";
import { WishDetail } from "../Components/WishDetail/WishDetail";

export const Router = () => {
  const [search, setSearch] = useState("");

  const onSearch = useCallback((searchValue) => {
    setSearch(searchValue);
  });

  const onClear = useCallback(() => {
    setSearch("");
  });

  return (
    <Routes>
      <Route element={<Layout onClear={onClear} onSearch={onSearch} />}>
        <Route path="/wish-list" element={<App search={search} />} />
        <Route path="/wish-list/wish/:id" element={<WishDetail />} />
        <Route path="*" element={<App search={search} />} />
      </Route>
    </Routes>
  );
};
