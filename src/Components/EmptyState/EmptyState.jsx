import styles from "./EmptyState.module.css";

export const EmptyState = ({ isSearching }) => {
  return (
    <>
      <div className={styles.container}>
        {isSearching ? (
          <div className={styles.message}>Nenhum desejo encontrado</div>
        ) : (
          <div className={styles.message}>
            Você ainda não teve nenhum desejo
          </div>
        )}
      </div>
    </>
  );
};
