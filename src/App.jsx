import { useState } from "react";
import styles from "./App.module.css";
import { CardGrid } from "./Components/CardGrid/CardGrid";
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";

function App() {
  const [wishs, setWishs] = useState([]);
  const [form, setForm] = useState({
    name: "",
    description: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className={styles.app}>
        <Header />
        <main className={styles.main}>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
            <input
              type="text"
              name="description"
              value={form.description}
              onChange={handleChange}
            />
          </form>
          <CardGrid />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
