import styles from "./App.module.css";
import { Card } from "./Components/Card/Card";
import { CardGrid } from "./Components/CardGrid/CardGrid";
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";

function App() {
  return (
    <>
      <div className={styles.app}>
        <Header />
        <main className={styles.main}>
          <CardGrid />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
