import { useCallback, useEffect, useMemo, useState } from "react";
import styles from "./App.module.css";
import { CardGrid } from "./Components/CardGrid/CardGrid";
import { Footer } from "./Components/Footer/Footer";
import { AddItemForm } from "./Components/AddItemForm/AddItemForm";
import { useWishs } from "./Hooks/useWishs";

const DEFAULT_FORM = {
  name: "",
  description: "",
  urlImage: "",
  date: "",
};

function App({ search }) {
  const { wishs, setWishs } = useWishs();
  const [form, setForm] = useState(DEFAULT_FORM);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newId =
      wishs.length > 0 ? Math.max(...wishs.map((w) => Number(w.id))) + 1 : 1;
    const newWish = { ...form, id: newId };
    const updatedWishs = [...wishs, newWish];
    setWishs(updatedWishs);
    setForm(DEFAULT_FORM);
  };

  const handleDelete = useCallback(
    (indexToDelete) => {
      const updateWishs = wishs.filter((_, index) => index !== indexToDelete);
      setWishs(updateWishs);
    },
    [wishs]
  );

  const filteredWishs = useMemo(() => {
    if (!search.trim()) {
      return wishs;
    }
    return wishs.filter((wish) => {
      const searchLower = search.toLowerCase();
      return (
        wish.name.toLowerCase().includes(searchLower) ||
        wish.description.toLowerCase().includes(searchLower)
      );
    });
  }, [search, wishs]);

  return (
    <>
      <main className={styles.main}>
        <AddItemForm
          handleSubmit={handleSubmit}
          form={form}
          setForm={setForm}
        />
        <CardGrid
          wishs={filteredWishs}
          handleDelete={handleDelete}
          search={search}
        />
      </main>
    </>
  );
}

export default App;
