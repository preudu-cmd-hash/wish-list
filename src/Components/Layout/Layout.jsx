import { Footer } from "../Footer/Footer";
import styles from "../../App.module.css";
import { Outlet } from "react-router";

export const Layout = () => {
  return (
    <div className={styles.app}>
      <Outlet />
      <Footer />
    </div>
  );
};
