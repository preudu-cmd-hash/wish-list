import { useState } from "react";
import styles from "./App.module.css";
import { CardGrid } from "./Components/CardGrid/CardGrid";
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
import { AddItemForm } from "./Components/AddItemForm/AddItemForm";

function App() {
  const [wishs, setWishs] = useState([]);
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
          <CardGrid wishs={wishs} />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
