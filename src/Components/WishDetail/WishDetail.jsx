import { useNavigate, useParams } from "react-router";
import { useWishs } from "../../Hooks/useWishs";
import { useEffect, useState } from "react";
import { formatDate } from "../../utils/FormatDate";
import { AddItemForm } from "../AddItemForm/AddItemForm";
import styles from "./WishDetail.module.css";

export const WishDetail = () => {
  const { id } = useParams();
  const { wishs, loading, setLoading, form, setForm, setWishs } = useWishs();
  const [wishDetail, setWishDetail] = useState({});
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);

  const handleEditToggle = () => {
    setIsEditing((prev) => !prev);
  };

  useEffect(() => {
    setLoading(true);
    if (id && wishs.length > 0) {
      const foundWish = wishs.find((wish) => wish.id == parseInt(id));
      setWishDetail(foundWish);
      setForm({
        name: foundWish.name,
        description: foundWish.description,
        urlImage: foundWish.urlImage,
        date: foundWish.date || "",
      });
    }
    setLoading(false);
  }, [wishs, id]);

  if (loading) {
    return <h1>Carregando...</h1>;
  }

  const handleUpdate = (e) => {
    e.preventDefault();
    const updWish = { ...form, id: wishDetail.id };
    setWishs((prev) =>
      prev.map((wish) => (wish.id == updWish.id ? updWish : wish))
    );
    setIsEditing(false);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.button}>
          <button className={styles.back} onClick={() => navigate(-1)}>
            Voltar
          </button>
          <button className={styles.edit} onClick={handleEditToggle}>
            Editar
          </button>
        </div>
        {isEditing ? (
          <>
            <AddItemForm
              handleSubmit={handleUpdate}
              setForm={setForm}
              form={form}
            />
          </>
        ) : (
          <>
            <h1 className={styles.title}>Detalhes do desejo com o id: {id}</h1>
            <img
              className={styles.img}
              src={wishDetail.urlImage}
              alt={wishDetail.name}
            />
            <p className={styles.name}>{wishDetail.name}</p>
            <p className={styles.desc}>{wishDetail.description}</p>
            <p className={styles.date}>{formatDate(wishDetail.date)}</p>
          </>
        )}
      </div>
    </>
  );
};
