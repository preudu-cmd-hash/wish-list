import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.direitos}>
            2025, Wish List - Todos os direitos reservados
          </p>
          <div className={styles.links}>
            <a
              className={styles.githubLink}
              href="https://github.com/preudu-cmd-hash"
              rel="noopener noreferrer"
              target="_blank"
            >
              Pedro Henrique
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
