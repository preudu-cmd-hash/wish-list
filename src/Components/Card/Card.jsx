import styles from "./Card.module.css";

export const Card = ({ name, description, image, onDelete }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imgContainer}>
        <img src={image} alt={name} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.description}>{description}</p>
        <button className={styles.deleteButton} onClick={onDelete}>
          🗑️
        </button>
      </div>
    </div>
  );
};
