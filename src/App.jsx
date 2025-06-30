import styles from "./App.module.css";
import { Card } from "./Components/Card/Card";
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";

function App() {
  return (
    <>
      <div className={styles.app}>
        <Header />
        <main className={styles.main}>
          <Card
            name="Basquete"
            desciption="Quero ter tempo para jogar basquete"
            image="https://preview.redd.it/will-kyrie-irving-ever-be-regarded-as-one-of-the-top-10-v0-fft1hx140ire1.jpeg?width=640&crop=smart&auto=webp&s=6b98beae719ba782a7791259b0e5ac869fe2b183"
          />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
