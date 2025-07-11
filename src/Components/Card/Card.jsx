import { use, useState } from "react";
import styles from "./Card.module.css";
import { useNavigate } from "react-router";
import { formatDate } from "../../utils/FormatDate";

export const Card = ({ name, description, image, date, onDelete, id }) => {
  const formatedDate = formatDate(date);
  const navigate = useNavigate();

  return (
    <div className={styles.cardContainer}>
      <div className={styles.imgContainer}>
        <img src={image} alt={name} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.date}>{formatedDate}</p>
        <button className={styles.deleteButton} onClick={onDelete}>
          🗑️
        </button>
        <button
          className={styles.detalhes}
          onClick={() => navigate(`/wish-list/wish/${id}`)}
        >
          Detalhes
        </button>
      </div>
    </div>
  );
};
