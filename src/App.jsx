import { useEffect, useState } from "react";
import styles from "./App.module.css";
import { CardGrid } from "./Components/CardGrid/CardGrid";
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
import { AddItemForm } from "./Components/AddItemForm/AddItemForm";

function App() {
  const [wishs, setWishs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    name: "",
    description: "",
    urlImage: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedWishs = [...wishs, form];
    setWishs(updatedWishs);
    setForm({
      name: "",
      description: "",
      urlImage: "",
    });
  };

  const handleDelete = (indexToDelete) => {
    const updateWishs = wishs.filter((_, index) => index !== indexToDelete);
    setWishs(updateWishs);
  };

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

  return (
    <>
      <div className={styles.app}>
        <Header />
        <main className={styles.main}>
          <AddItemForm
            handleSubmit={handleSubmit}
            form={form}
            setForm={setForm}
          />
          <CardGrid wishs={wishs} handleDelete={handleDelete} />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
