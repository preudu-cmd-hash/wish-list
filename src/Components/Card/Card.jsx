import { use, useState } from "react";
import styles from "./Card.module.css";

export const Card = ({ name, description, image, date, onDelete, onEdit }) => {
  const [ano, mes, dia] = date ? date.split("-") : "";
  const convertedDate = new Date(ano, mes - 1, dia);
  const formatedDate = isNaN(convertedDate)
    ? ""
    : Intl.DateTimeFormat("pt-Br").format(convertedDate);

  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(name);
  const [editDescription, setEditDescription] = useState(description);
  const [editDate, setEditDate] = useState(date);

  

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
      </div>
    </div>
  );
};
