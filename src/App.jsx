import { useCallback, useEffect, useMemo, useState } from "react";
import styles from "./App.module.css";
import { CardGrid } from "./Components/CardGrid/CardGrid";
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
import { AddItemForm } from "./Components/AddItemForm/AddItemForm";

function App() {
  const [wishs, setWishs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [form, setForm] = useState({
    name: "",
    description: "",
    urlImage: "",
    date: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedWishs = [...wishs, form];
    setWishs(updatedWishs);
    setForm({
      name: "",
      description: "",
      urlImage: "",
      date: "",
    });
  };

  const handleDelete = useCallback(
    (indexToDelete) => {
      const updateWishs = wishs.filter((_, index) => index !== indexToDelete);
      setWishs(updateWishs);
    },
    [wishs]
  );

  useEffect(() => {
    const savedWishs = localStorage.getItem("userWishs");
    if (savedWishs) {
      try {
        const parsedWishs = JSON.parse(savedWishs);
        setWishs(parsedWishs);
      } catch (error) {
        console.error(error);
      }
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!loading) {
      localStorage.setItem("userWishs", JSON.stringify(wishs));
    }
  }, [wishs]);

  const filteredWishs = useMemo(() => {
    if (!search.trim()) {
      return wishs;
    }
    return wishs.filter((wish) => {
      const searchLower = search.toLowerCase();
      retun(
        wishs.name.toLowerCase().includes(searchLower) ||
          wish.description.toLowerCase().includes(searchLower)
      );
    });
  });

  const onSearch = useCallback((searchValue) => {
    setSearch(searchValue);
  });

  const onClear = useCallback(() => {
    setSearch("");
  });

  return (
    <>
      <div className={styles.app}>
        <Header onSearch={onSearch} onClear={onClear} />
        <main className={styles.main}>
          <AddItemForm
            handleSubmit={handleSubmit}
            form={form}
            setForm={setForm}
          />
          <CardGrid wishs={filteredWishs} handleDelete={handleDelete} />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
