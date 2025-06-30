import { Card } from "../Card/Card";
import styles from "./CardGrid.module.css";

export const CardGrid = () => {
  return (
    <div className={styles.grid}>
      <Card
        name="Basquete"
        desciption="Quero ter tempo para jogar basquete"
        image="https://preview.redd.it/will-kyrie-irving-ever-be-regarded-as-one-of-the-top-10-v0-fft1hx140ire1.jpeg?width=640&crop=smart&auto=webp&s=6b98beae719ba782a7791259b0e5ac869fe2b183"
      />
      <Card
        name="Basquete"
        desciption="Quero ter tempo para jogar basquete"
        image="https://preview.redd.it/will-kyrie-irving-ever-be-regarded-as-one-of-the-top-10-v0-fft1hx140ire1.jpeg?width=640&crop=smart&auto=webp&s=6b98beae719ba782a7791259b0e5ac869fe2b183"
      />
    </div>
  );
};
